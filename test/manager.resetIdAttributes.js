const assert = require(`assert`)

const Bootstrap = require(`./support/bootstrap`)

describe(`manager`, () => {
  describe(`.resetIdAttributes`, () => {
    let manager

    beforeEach(async() => {
      manager = Bootstrap.manager(Bootstrap.database())
      Bootstrap.models(manager)
      await Bootstrap.tables(manager)
    })

    it(`should reset idAttributes`, async() => {
      const created = await manager.create(`make`, {
        name: `BMW`
        , models: [
          {
            name: `X5`
          }
          , {
            name: `X6`
          }
        ]
      })

      assert.ok(created.toJSON().id !== null)
      assert.ok(created.toJSON().models[0].id !== null)

      manager.resetIdAttributes(created)

      assert.ok(created.toJSON().id === null)
      assert.ok(created.toJSON().models[0].id === null)
    })
  })
})

migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s8dfc94urgep90t")

  // remove
  collection.schema.removeField("7ziaxrf0")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s8dfc94urgep90t")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7ziaxrf0",
    "name": "field",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})

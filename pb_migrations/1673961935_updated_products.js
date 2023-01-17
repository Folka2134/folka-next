migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s8dfc94urgep90t")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "l5ngi7ar",
    "name": "price",
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s8dfc94urgep90t")

  // remove
  collection.schema.removeField("l5ngi7ar")

  return dao.saveCollection(collection)
})

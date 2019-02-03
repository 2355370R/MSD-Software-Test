describe('Simple Functionality check of Add of Activitiy item', ()=>{
  let todo, item, item2;
  var entries = [];
  item = {
    'title': "milk ",
    'description': "get milk 2",
    'date': "2019-02-20",
    'id': 1,
  }
  item2 = {
    'title': "milk ",
    'description': "get milk 2",
    'date': "2019-02-20",
    'id': 2,
  }


  it('should add an item', ()=>{
    entries.push(item);
    expect(entries.length).toBe(1);
  })


})

describe('Simple Functionality check of Delete Activity Item', ()=>{
  let todo, item, item2;
  var entries = [];
  item = {
    'title': "milk ",
    'description': "get milk 2",
    'date': "2019-02-20",
    'id': 1,
  }
  item2 = {
    'title': "milk ",
    'description': "get milk 2",
    'date': "2019-02-20",
    'id': 2,
  }

  it('should delete an item', ()=>{
    entries.push(item)
    entries.push(item2)
    let id = 2;
    for (var i = 0; i < entries.length; i++) {
      if(entries[i].id == id)
      {
        entries = entries.filter(function( obj ) {
          return obj.id !== id;
        });
      }
    }
    expect(entries.length).toBe(1);
  })

})

describe('Simple Functionality check of Update Activity Item', ()=>{
  let todo, item, item2;
  var entries = [];
  item = {
    'title': "milk ",
    'description': "get milk 2",
    'date': "2019-02-20",
    'id': 1,
  }
  item2 = {
    'title': "milk ",
    'description': "get milk 2",
    'date': "2019-02-20",
    'id': 2,
  }

  it('should Update an item', ()=>{
    entries.push(item)
    entries.push(item2)
    let id = 2;
    var description = "Happy";
    for (var i = 0; i < entries.length; i++) {
      if(entries[i].id == id)
      {
        entries[i].description = description;
      }
    }
    expect(entries[1].description).toBe("Happy");
  })

})

Polymer({
  is: 'paper-menu-scroll',

  properties: {
    itemList_: {
      type: Array,
      value: function() {
        return [
          {'name': 'foo'},
          {'name': 'bar'},
          {'name': 'baz'},
          {'name': 'qux'},
          {'name': 'foo'},
          {'name': 'bar'},
          {'name': 'baz'},
          {'name': 'qux'},
          {'name': 'foo'},
          {'name': 'bar'},
          {'name': 'baz'},
          {'name': 'qux'},
        ];
      }
    },
  },

  onItemClick: function() {
    var clickedItem = this.$.itemList.itemForElement(event.target);
    console.log('item clicked: ' + clickedItem.name);
  },
});

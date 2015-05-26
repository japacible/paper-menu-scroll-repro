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
          {'name': 'foofoo'},
          {'name': 'barbar'},
          {'name': 'bazbaz'},
          {'name': 'quxqux'},
          {'name': 'foofoofoo'},
          {'name': 'barbarbar'},
          {'name': 'bazbazbaz'},
          {'name': 'quxquxqux'},
        ];
      }
    },
  },

  onItemClick: function() {
    var clickedItem = this.$.itemList.itemForElement(event.target);
    console.log('item clicked: ' + clickedItem.name);
  },
});

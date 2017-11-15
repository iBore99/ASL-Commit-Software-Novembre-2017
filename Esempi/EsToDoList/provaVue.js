window.onload = function() {
    new Vue({
        el: '#box',

        data: {
            title: 'Sortable items',
            items: [
                { id: 1, title: "Item 1" },
                { id: 2, title: "Item 2" },
                { id: 3, title: "Item 3" }
            ]
        },
        methods: {
            addItem: function() {
                var id = Math.floor((Math.random() * 100) + 4);
                this.items.push({
                    id: id,
                    title: 'Random item ' + id
                });
            }
        },
        mounted: function() {
            var self = this;
            self.$nextTick(function() {
                var sortable = Sortable.create(document.getElementById('items'), {
                    onEnd: function(e) {
                        var clonedItems = self.items.filter(function(item) {
                            return item;
                        });
                        clonedItems.splice(e.newIndex, 0, clonedItems.splice(e.oldIndex, 1)[0]);
                        self.items = [];
                        self.$nextTick(function() {
                            self.items = clonedItems;
                        });
                    }
                });
            });
        }
    });

}
const EXAMPLE_ITEMS = [
    {
        id: 1,
        name: 'item 1',
        parent: null
    },
    {
        id: 2,
        name: 'item 2',
        parent: null
    },
    {
        id: 3,
        name: 'item 2.1',
        parent: 2
    },
    {
        id: 4,
        name: 'item 2.2',
        parent: 2
    },
    {
        id: 5,
        name: 'item 3',
        parent: null
    },
    {
        id: 6,
        name: 'item 3.1',
        parent: 5
    },
    {
        id: 7,
        name: 'item 3.1.1',
        parent: 6
    },
    {
        id: 8,
        name: 'item 3.1.2',
        parent: 6
    },
    {
        id: 9,
        name: 'item 3.2',
        parent: 5
    }
];


// solution 1 - straight forward solution - iterate only the parents and then dig into their children recursively
function solution1(items) {
    function printChildren(item, spaces = '    ') {
        const children = items.filter(i => i.parent === item.id);
        for (const child of children) {
            console.log(spaces + child.name);
            printChildren(child, spaces + '    ');
        }

    }

   for (const item of items) {
       if (!item.parent) {
           console.log(item.name);
           printChildren(item);
       }
   }
}

solution1(EXAMPLE_ITEMS);
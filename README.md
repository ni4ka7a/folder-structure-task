# Folder Structure Task

An API returns a list of items representing a folder structure. The items are returned in flat strucure. Every item has `id`, `name` and `parent` - the parent is either null or an `id` of an existing item.

Write a program tha reads the list of items and renders them in a folder-like nested structure. Display the name of each item. Each item that does not have a parent should be rendered on 1st level. Each subitem should be idented with 1 more tab (4 spaces) than it's parent.

**Note**: The max item nest level is 10.



**Example input:**

```
[
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
]
```

**Example output:**
```
item 1
item 2
    item 2.1
    item 2.2
item 3
    item 3.1
        item 3.1.1
        item 3.1.2
    item 3.2
```
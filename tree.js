let list = [
    { id: 1, name: 'aa', parent_id: 0, child: [] },
    /**/{ id: 2, name: 'bb', parent_id: 1, child: [] },
    /**/{ id: 3, name: 'cc', parent_id: 1, child: [] },

    { id: 4, name: 'dd', parent_id: 0, child: [] },
    /**/{ id: 5, name: 'ee', parent_id: 4, child: [] },
    /**/{ id: 6, name: 'ff', parent_id: 4, child: [] },
    /**//**/{ id: 7, name: 'gg', parent_id: 6, child: [] },

    { id: 8, name: 'hh', parent_id: 0, child: [] },
    /**/{ id: 9, name: 'ii', parent_id: 8, child: [] },

    { id: 10, name: 'jj', parent_id: 0, child: [] },
    /**/{ id: 11, name: 'kk', parent_id: 10, child: [] },
    /**//**/{ id: 12, name: 'll', parent_id: 11, child: [] },
]
// console.log(getRootElements(list));

buildTree(getRootElements(list).finalArray[0], getRootElements(list).finalArray, getRootElements(list).originalArray);

function getRootElements(data) {
    let finalArray = [];
    let originalArray = data;

    data.forEach((element) => {
        if (element.parent_id == 0) {
            finalArray.push({
                id: element.id,
                name: element.name,
                parent_id: element.parent_id,
                child: []
            })

            originalArray = originalArray.filter(function (obj) {
                return obj.id !== element.id;
            });

        }
    })
    return { 'finalArray': finalArray, 'originalArray': originalArray };
}

function buildTree(rootNode, rootNodesArray, childNodesArray){

    console.log(rootNode, rootNodesArray, childNodesArray);

    childNodesArray.forEach((element)=>{

    })


}


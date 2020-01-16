module.exports = {
    parserOpts: {
        headerPattern: /^\[(\w*)\] - #(\d+) - (.*)$/, // [type] - #numberofticket - Descriptions of the implementation.      
        headerCorrespondence: ['type', 'references', 'subject']
    }
};



/* 
Variations of regex
^\[(\w*)\] - #(\d|[S\/N]+) - (.*)$  = accepting S/N instead of a ticket/reference number. Ex: [NOVO] - #S/N - tESTE

^\[(\w*)\]\((\d|[S\/N]+)\):(.*)$ = Ex. [NOVO](2): tESTE   or [NOVO](S/N): tESTE


*/

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

/^\[(\w*)\] - @([d.\d.\d]+) - (.*)$/ : Ex. [NOVO] - @0.0.0 - VERSAO DE RELEASE

*/

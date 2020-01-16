module.exports = {
    parserOpts: {
        headerPattern: /^\[(\w*)\] - #(\d+) - (.*)$/, // [type] - #numberofticket - Descriptions of the implementation
        headerCorrespondence: ['type', 'references', 'subject']
    }
};

describe('verify letters, numbers and special chars', ()=> {

    it('test "going shopping" entred correctly', ()=> {
        var input = 'input[name="todo"]';
        var enterKey = '\uE007';
        var dataLabel = 'label.title';

        var dataText = 'going shopping';

        browser.url('http://localhost:3000');
        browser.addValue(input,dataText + enterKey);

        var labelText = browser.getText(dataLabel);

        var labelsArray = browser.selectorExecute('//label', function(labels) {
        
            var textArray=[];
            for (var i=0; i<labels.length; i++){
                textArray.push(labels[i].innerHTML);
            }

            return textArray;
        });

        var found = 0;
        for (var i=0; i<labelsArray.length; i++){

           //console.log(labelsArray[i].trim() + ':' + dataText);
            
           if (labelsArray[i] == dataText) {
               found++;
           };
        }

        found.should.be.equal(1);
    });

     it('test "cooking diner" entred correctly', ()=> {
        var input = 'input[name="todo"]';
        var enterKey = '\uE007';
        var dataLabel = 'label.title';

        var dataText = 'cooking diner';

        browser.url('http://localhost:3000');
        browser.addValue(input,dataText + enterKey);

        var labelText = browser.getText(dataLabel);

        var labelsArray = browser.selectorExecute('//label', function(labels) {
        
            var textArray=[];
            for (var i=0; i<labels.length; i++){
                textArray.push(labels[i].innerHTML);
            }

            return textArray;
        });

        var found = 0;
        for (var i=0; i<labelsArray.length; i++){

           //console.log(labelsArray[i].trim() + ':' + dataText);
            
           if (labelsArray[i] == dataText) {
               found++;
           };
        }

        found.should.be.equal(1);
    });

    it('test "going to supermarket and buy tometos, egg, milk, cheese, 4*lemon, 1.5 kilos watermeloun" entred correctly', ()=> {
        var input = 'input[name="todo"]';
        var enterKey = '\uE007';
        var dataLabel = 'label.title';

        var dataText = 'going to supermarket and buy tometos, egg, milk, cheese, 4*lemon, 1.5 kilos watermeloun';

        browser.url('http://localhost:3000');
        browser.addValue(input,dataText + enterKey);

        var labelText = browser.getText(dataLabel);

        var labelsArray = browser.selectorExecute('//label', function(labels) {
        
            var textArray=[];
            for (var i=0; i<labels.length; i++){
                textArray.push(labels[i].innerHTML);
            }

            return textArray;
        });

        var found = 0;
        for (var i=0; i<labelsArray.length; i++){

           //console.log(labelsArray[i].trim() + ':' + dataText);
            
           if (labelsArray[i] == dataText) {
               found++;
           };
        }

        found.should.be.equal(1);
    });

    it('test "CLEAN THE ROOM, PLAY FOOTBALL" entred correctly', ()=> {
        var input = 'input[name="todo"]';
        var enterKey = '\uE007';
        var dataLabel = 'label.title';

        var dataText = 'CLEAN THE ROOM, PLAY FOOTBALL';

        browser.url('http://localhost:3000');
        browser.addValue(input,dataText + enterKey);

        var labelText = browser.getText(dataLabel);

        var labelsArray = browser.selectorExecute('//label', function(labels) {
        
            var textArray=[];
            for (var i=0; i<labels.length; i++){
                textArray.push(labels[i].innerHTML);
            }

            return textArray;
        });

        var found = 0;
        for (var i=0; i<labelsArray.length; i++){

           //console.log(labelsArray[i].trim() + ':' + dataText);
            
           if (labelsArray[i] == dataText) {
               found++;
           };
        }

        found.should.be.equal(1);
    });
it('test "aaaaaaaaa" entred correctly', ()=> {
        var input = 'input[name="todo"]';
        var enterKey = '\uE007';
        var dataLabel = 'label.title';

        var dataText = 'aaaaaaaaa';

        browser.url('http://localhost:3000');
        browser.addValue(input,dataText + enterKey);

        var labelText = browser.getText(dataLabel);

        var labelsArray = browser.selectorExecute('//label', function(labels) {
        
            var textArray=[];
            for (var i=0; i<labels.length; i++){
                textArray.push(labels[i].innerHTML);
            }

            return textArray;
        });

        var found = 0;
        for (var i=0; i<labelsArray.length; i++){

           //console.log(labelsArray[i].trim() + ':' + dataText);
            
           if (labelsArray[i] == dataText) {
               found++;
           };
        }

        found.should.be.equal(1);
    });
});
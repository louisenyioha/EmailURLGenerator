window.onload = function() {
    const getFullUrl = document.querySelector('#full-url');
    let getURLInput = document.querySelector('#main-url');

    const getFiscalYear = document.querySelector('#fsyear');
    let getFiscalYearInput = document.querySelector('#fiscal_year');

    const getMarketSourceCode = document.querySelector('#market-source-code');
    let getMarketSourceCodeInput = document.querySelector('#marketSourceCode');

    const getMarket = document.querySelector('#mkt');
    let getMarketInput = document.querySelector('#marketfield');

    const getEmailType = document.querySelector('#emailType');
    let getEmailTypeInput = document.querySelector('#email_type');

    const getNameOfCreative = document.querySelector('#name_of_creative');
    let getNameofCreativeInput = document.querySelector('#creative_name');

    const getMonth = document.querySelector('#month');
    let getMonthInput = document.querySelector('#gen_month');

    const getEmailVersion = document.querySelector('#email_version');
    let getEmailVersionInput = document.querySelector('#emailVersion');

    const getAudienceSegment = document.querySelector('#audience_segment');
    const getAudienceSegmentInput = document.querySelector('#audienceSegment');

    const getATV = document.querySelector('#additional_testing_variants');
    let getATVInput = document.querySelector('#adv');

    const getGenBtn = document.querySelector('#btn_generate_url');

    // Populate input fields
    const populateTextInputValue = function(p1, p2) {
        p1.addEventListener('input', function() {
            p2.value = p1.value;
        });
    };


   const populateDropDownValue = function(p1, p2) {
    p1.addEventListener('change', function(event) {
        const selectedValue = event.target.value;
        if(selectedValue || selectedValue !== null || selectedValue !== '') {
            p2.value = selectedValue
        }
        console.log(p2.value);
    });
   }


    populateTextInputValue(getFullUrl, getURLInput);

    populateDropDownValue(getFiscalYear, getFiscalYearInput);

    populateDropDownValue(getMarketSourceCode, getMarketSourceCodeInput);

    populateDropDownValue(getMarket, getMarketInput);

    populateDropDownValue(getEmailType, getEmailTypeInput);

    populateTextInputValue(getNameOfCreative, getNameofCreativeInput);

    populateDropDownValue(getMonth, getMonthInput);

    populateDropDownValue(getEmailVersion, getEmailVersionInput);

    populateDropDownValue(getAudienceSegment, getAudienceSegmentInput);

    populateDropDownValue(getATV, getATVInput);

    // Get input fields
    const getInputfields = document.querySelectorAll('.fieldValue');

    const calcUrlResults = function(fields) {
        for(let i = 0; i < fields.length; i++) {
            concat = 
            fields[0].value +
            "?" +
            "ms=" +
            fields[1].value +
            "_" +
            fields[2].value +
            "_" +
            fields[3].value +
            "_" +
            fields[6].value +
            fields[7].value +
            fields[8].value;

            if(fields[9].value) {
            //    concat = concat + fields[9].value;
               concat += fields[9].value;
            }
            return concat;
            // console.log(concat);
        }
    }

    const calcEmailResults = function(fields) {
        const getFY = document.querySelector('#fsyear');
        const getSelectedIndex = getFY.selectedIndex;
        const getSelectedOption = getFY.options[getSelectedIndex];
        const getSelectedText = getSelectedOption.text;

        for(let i = 0; i < fields.length; i++) {
            concat = 
            getSelectedText +
            " - " +
            fields[6].value +
            fields[7].value +
            fields[8].value +
            " - " +
            fields[4].value +
            " - " +
            fields[5].value;

            if(fields[9].value) {
                concat += " - " + fields[9].value;
            }
            return concat;
            // console.log(concat);
        }
    }

    let getUrlResult = document.querySelector('#urloutput');
    let getEmailResult = document.querySelector('#emailoutput');

    getGenBtn.addEventListener('click', function() {
        let urlResult = '';
        let emailResult = '';
        urlResult = calcUrlResults(getInputfields);
        emailResult = calcEmailResults(getInputfields);

        console.log(urlResult);
        getUrlResult.value = urlResult;
        getEmailResult.value = emailResult;

    });
    // calcResults(getInputfields);
};



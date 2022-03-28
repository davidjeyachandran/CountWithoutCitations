(function () {

    const BUTTON_ID = 'remove'
    document.getElementById(BUTTON_ID).addEventListener('click', removeCitations)

    function removeCitations() {
        const $textInput = document.getElementById('inputtext')
        const textValue = $textInput.value


        // console.log('removeCitations', textValue);
        const $citations = document.getElementById('citation-text')
        const regex = /\([\w\s\.:;,&-]*\d\)/g;
        const found = textValue.match(regex);

        // Show citations
        $citations.value = ''
        if (found && found.length > 0) {
            $citations.value = found.join('\n');
            document.getElementById('citation').style.visibility = 'visible'
        }

        // Remove citations
        const cleaned = textValue.replaceAll(regex, '');

        // Calculate word count
        document.getElementById('result').innerHTML = ''
        const regexWords = /\s+/gi;
        const wordCount = (cleaned.trim() === '') ? 0 : cleaned.trim().replace(regexWords, ' ').split(' ').length;
        const msg = "Word count without citations: <strong>" + wordCount
        document.getElementById('result').innerHTML = msg
        document.getElementById('results-heading').innerHTML = ': ' + wordCount

    }
})()
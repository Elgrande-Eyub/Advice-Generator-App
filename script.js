let link = "https://api.adviceslip.com/advice";

document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('#getAdvice').addEventListener('click', () => {
        document.querySelector('#Advice').classList.add('loading');
        document.querySelector('#AdviceID').classList.add('Advice__ID--d-none');
        loadAdvice(link);
    });
})

function loadAdvice(link) {
    const adContainer = document.querySelector('#Advice');

    fetch(link, { cache: 'no-cache' }).then(res => res.json())
        .then(data => setTimeout(() => {
            // update id and message

            document.querySelector('#AdviceID').innerHTML = data.slip.id;
            document.querySelector('#AdviceQuotes').innerHTML = data.slip.advice;

            adContainer.classList.add('show');
            document.querySelector('#AdviceID').classList.remove('Advice__ID--d-none');
            // remove loading class
            adContainer.classList.remove('loading');
        }, 1000));
}
//Array of quotes
const quote=[
    {text:"Success is not final; failure is not fatal: It is the courage to continue that counts.",author:"Winston Churchill"},
    {text:"It is better to fail in originality than to succeed in imitation.",author:"Herman Melville"},
    {text:"The road to success and the road to failure are almost exactly the same.",author: "Colin R. Davis"},
    {text:"Success usually comes to those who are too busy to be looking for it." ,author:"Henry David Thoreau"},
    {text:"Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.",author:" Dale Carnegie"}
];

//Function Generatequote()
function generatequote(){
    const randomindex=Math.floor(Math.random()*quote.length);
    const randomquote=quote[randomindex];
    document.getElementById('quote-text').textContent=randomquote.text;
    document.getElementById('quote-author').textContent=`${randomquote.author}`;
}
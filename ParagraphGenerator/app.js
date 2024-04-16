let para=[
    `Life free from illness and ailment and living a reasonably long life
     span are indicative of a healthy life. Availability of pre and post natal health
     care facilities in order to reduce infant mortality and post delivery deaths
     among mothers, old age health care, adequate nutrition and safety of
     individual are important measures of a healthy and reasonably long life.
     Availability of pre and post natal health
     care facilities in order to reduce infant mortality and post delivery deaths
     among mothers, old age health care, adequate nutrition and safety of
     individual are important measures of a healthy and reasonably long life.`,

     `A 2000-word essay is a standard undergraduate college assignment.
      You might need to write an essay of such a length on almost any discipline: 
      psychology, philosophy, science and technology, linguistics, political science,
       etc. While writing a paper of 2000 to 2100 words, you will need to demonstrate 
       an in-depth knowledge of the topic and the ability to structure your thoughts well.`,

    `Executive Summary This paper outlines a business proposal for a fitness center in 
    Sharjah for military veterans who do not have health coverage for physical fitness.
     It analyzes the external and internal environments, risks, and prospective growth.
     The business proposal is viable owing to a number of factors`,

     `Introduction Data management has become an important part of organisational management.
      When appropriately integrated into the company’s business environment, IT-based data 
      management offers a wide range of advantages in operations, marketing, HR, and finance.`,

      `Introduction Proper management in the modern business environment is a significant 
      criterion that largely determines the success of a particular organization and its
       recognition in the market.`,

      `Annie Leibovitz is one of the best portrait photographers in today’s era.
       She focuses her works on a variety of subjects but mostly among celebrity
        portraits. The range of her photographs creates scenes that touch the soul.`,

     `Theories of learning and motivation Education theories and approaches employed in 
      various domains bring up valuable nuances on links establishable student motivation
       and aspects like achievement and retention.`,

       `Typing 2000 words on a keyboard usually takes 40 to 80 minutes, depending on your 
       typing speed. However, if you need to write an academic paper, add time for research,
        formatting the text, and preparing graphic materials. You’ll need at least 6 hours
         for 2000 words.`,

        `The final number of references that you should include in an essay of 2000 to 2050 
        words will depend on the assignment’s genre and complexity. For instance, 
        on middle-school level, you’ll have to add 13 references on average.`,

        `A paper of 2000 words is not necessarily an essay. Such a length is also suitable 
        for an extended essay, research paper, or term paper. In addition to the introduction,
         body, and conclusion, you might need to include other elements, like an abstract, 
         methods, and discussion.`
];
function generate(){
       let num=document.getElementById("num").value;
       let text="<ul>";
       if(num<=0){
        text+="<li>"+"<h1>Please Enter a valid number</h1>"+"</li>";
       }
       else if(num>10){
        text+="<li>"+"<h1>Please Enter number between 1 to 10</h1>"+"</li>";
       }
       else{
        for(let i=0;i<num;i++){
         text+="<br><br><li>"+"<div class='param'>"+para[i]+"</div>"+"</li>";
         }
       }
       text+="</ul>";
       document.getElementById("lst").innerHTML=text;
}
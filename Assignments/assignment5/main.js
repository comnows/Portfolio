
function postFunction()
{
    var topicText = document.getElementById("topic1");
    var commentText1 = document.getElementById("comment1");
    var commentText2 = document.getElementById("comment2");

    if(topicText.innerText == "")
    {
        topicText.innerText = document.getElementById("text1").value;
    }
    else if(commentText1.innerText == "")
    {
        commentText1.innerText = document.getElementById("text1").value;
    }
    else if(commentText2.innerText == "")
    {
        commentText2.innerText = document.getElementById("text1").value;
    }
}

function clearFunction()
{
    var topicText = document.getElementById("topic1");
    var commentText1 = document.getElementById("comment1");
    var commentText2 = document.getElementById("comment2");
    
    topicText.innerHTML = "";
    commentText1.innerHTML = "";
    commentText2.innerHTML = "";
}
//Working the hidden Modal, attempt1//
//This should grab the Modal, I'm thinking I should grab the container rather than the content
var modal = document.getElementById("HiddenModal");
//This should select the image that will be used to trigger the modal rather than a traditional button.
//Why did I do this, you ask? Why for no reason other than the sheer whimsy of having a modal that one could discover
//by no means other than pure happenstance.
//the craziest part is that this is my first time using JavaScript in an actual integrated capacity
//This is kind of horrifying I'm not going to lie.
var img = document.getElementById("ModalTrigger")
var span = document.getElementsByClassName("close")[0];
//Okay, so far JavaScript feels intuitive, but it's the syntax I need to get down.
img.onclick = function(){
    modal.style.display = "block";
}
span.onclick = function(){
    modal.style.display = "none";
}
//The above code was done as a callback to my original site, which in addition to directing people to my music
//It was also full of little cute easter eggs and interactions that I found funny at the time
//One of which was a redirection to a diary page I kept on site but hidden, accessible only through a butterfly image in the footer
//The comedy being that you could get to my diary, but because there was no navigation you had to backtrack.
//Nope, even after disabling the link to bootstrap it wouldnt do what I said.
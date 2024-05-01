// SIDEBAR
const menuItems=document.querySelectorAll('.menu-item');

// MESSAGES
const messagesNotification=document.querySelector('#messages-notification');
const messages=document.querySelector('.messages');
const message=messages.querySelectorAll('.messages');
const messageSearch=document.querySelector('#message-search');

// THEME
const theme=document.querySelector('#theme');
const themeModal=document.querySelector('.customize-theme');
fontSizes = document.querySelectorAll('.choose-size span');
var root=document.querySelector(':root');
const colorPalette=document.querySelectorAll('.choose-color span');
const Bg1=document.querySelector('.bg-1');
const Bg2=document.querySelector('.bg-2');
const Bg3=document.querySelector('.bg-3');


// =====================SIDEBAR========================

// remove active class from all menu items..
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notifications-popup').style.display='none';
        }else{
            document.querySelector('.notifications-popup').style.display='block';
            document.querySelector('#notifications .notification-count').style.display='none';
        }
    })
})
  
// ==================MESSAGES=================
// search chat
const searchMessage=()=>{
    const val=messageSearch.value.toLowerCase();
    console.log(val);
    message.forEach(chat=>{
        let name=chat.querySelectorAll('h5').textContent.toLowerCase();
        if(name.indexOf(val)!=-1){
            chat.style.display='flex';
        }else{
            chat.style.display='none';
        }
    })
}

// highlight messages card when messages menu item is clicked
messagesNotification.addEventListener('click',()=>{
    messages.style.boxShadow='0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display='none';
    setTimeout(()=>{
        messages.style.boxShadow='none';
    },2000)
}) 


// THEME/DISPLAY CUSTOMIZATION

//opens modal
const openThemeModal=()=>{
    themeModal.style.display='grid';
}

//closes modal
const closeThemeModal=(e)=>{
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display='none';
    }
}

//close modal
themeModal.addEventListener('click',closeThemeModal);

theme.addEventListener('click', openThemeModal);



// ===========FONTS===========

// remove active class from spans or font size selectors
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}

fontSizes.forEach(size => {
    
    size.addEventListener('click', () => {
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');
        if(size.classList.contains('font-size-1')){
            fontSize='10px';
            root.style.setProperty('----sticky-top-left','5.4rem');
            root.style.setProperty('----sticky-top-right','5.4rem');
        }else if(size.classList.contains('font-size-2')){
            fontSize='13px';
            root.style.setProperty('----sticky-top-left','5.4rem');
            root.style.setProperty('----sticky-top-right','-7rem');
        }else if(size.classList.contains('font-size-3')){
            fontSize='16px';
            root.style.setProperty('----sticky-top-left','-2rem');
            root.style.setProperty('----sticky-top-right','-17rem');
        }else if(size.classList.contains('font-size-4')){
            fontSize='19px';
            root.style.setProperty('----sticky-top-left','-5rem');
            root.style.setProperty('----sticky-top-right','-25rem');
        }else if(size.classList.contains('font-size-5')){
            fontSize='22px';
            root.style.setProperty('----sticky-top-left','-12rem');
            root.style.setProperty('----sticky-top-right','-35rem');
        }
        
        //change font size of the root html element
        document.querySelector('html').style.fontSize=fontSize;
    })

})

// remove active class from colors
const changeActiveColorClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
} 

// change primary colors
colorPalette.forEach(color => {
    color.addEventListener('click',()=>{
        let primaryHue;
        changeActiveColorClass();

        if(color.classList.contains('color-1')){
            primaryHue=252;
        } else if(color.classList.contains('color-2')){
            primaryHue=52;
        } else if(color.classList.contains('color-3')){
            primaryHue=352;
        } else if(color.classList.contains('color-4')){
            primaryHue=152;
        } else if(color.classList.contains('color-5')){
            primaryHue=202;
        }
        color.classList.add('active');
        
        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})


// theme BACKGROUND values..
let ligthColorLightness;
let whiteColorLightness;
let darkColorLightness;

// change background color
const changeBG = () => {
    root.style.setProperty('--light-color-lightness', ligthColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness); 
}

Bg1.addEventListener('click',()=>{
    // add active class
    Bg1.classList.add('active');
    // remove active class from the others
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    // remove customized changes from local storage
    window.location.reload();
});

Bg2.addEventListener('click',()=>{
    darkColorLightness= '95%';
    whiteColorLightness= '20%';
    ligthColorLightness = '15%';
    
    // add active class
    Bg2.classList.add('active');
    // remove active class from the others
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
});

Bg3.addEventListener('click',()=>{
    darkColorLightness= '95%';
    whiteColorLightness= '10%';
    ligthColorLightness = '0%';
    
    // add active class
    Bg3.classList.add('active');
    // remove active class from the others
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();
}) 

// =========================LIKES-COMMENTS===============================
let likesVisible = false;
let commentsVisible = false;
// let likeCount = 0;

function toggleLikes() {
  likesVisible = !likesVisible;
  const likesDiv = document.querySelector('.likes');
  const likeButton = document.getElementById('like-button');
  likeButton.classList.toggle('liked');

  if (likesVisible) {
    likesDiv.classList.remove('hidden');
  } else {
    likesDiv.classList.add('hidden');
  }
}

function toggleCommentSection() {
  const commentSection = document.getElementById('comment-section');
  commentSection.style.display = commentSection.style.display === 'block' ? 'none' : 'block';
}

function submitComment() {
  const commentTextarea = document.getElementById('comment-textarea');
  const comment = commentTextarea.value;
  // Do something with the submitted comment, like sending it to a server
  console.log('Submitted comment:', comment);
  // Optionally, you can clear the textarea after submission
  commentTextarea.value = '';
}

function toggleComments() {
  commentsVisible = !commentsVisible;
  const commentsDiv = document.querySelector('.comments');
  if (commentsVisible) {
    commentsDiv.classList.remove('hidden');
    // You can fetch comments from backend here and append to commentList
    appendComment('User', 'OMG!! Looking too good 🔥');
    appendComment('AnotherUser', 'pretty as always 😍😍');
  } else {
    commentsDiv.classList.add('hidden');
    // Clear comments when hidden
    document.getElementById('commentList').innerHTML = '';
  }
}

function appendComment(user, comment) {
  const commentList = document.getElementById('commentList');
  const li = document.createElement('li');
  li.innerHTML = `<strong>${user}:</strong> ${comment}`;
  commentList.appendChild(li);
}

 //story
 function enlargeBackground(url) {
  var enlargedBackground = document.createElement("div");
  enlargedBackground.classList.add("enlarged-background");
  enlargedBackground.style.backgroundImage = "url('PICS(SocialMediaWebsite)/story-6.jpeg')";
  
  // Append the enlarged background to the body
  document.body.appendChild(enlargedBackground);
  
  // Show the enlarged background
  enlargedBackground.style.display = "flex";
  
  // Add event listener to close the enlarged background when clicked
  enlargedBackground.addEventListener("click", function() {
      this.style.display = "none";
  });
} 

























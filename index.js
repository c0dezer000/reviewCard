const data = [
    {
      id: 1,
      name: "John Doe",
      job: "Software Engineer",
      img: "pic1.jpg",
      review: "I've been using this product for a month now and I'm impressed with its user-friendliness. The features are comprehensive, and it has significantly improved my workflow efficiency.",
      reviewDate: "2024-08-05",
      rating: 4.5
    },
    {
      id: 2,
      name: "Jane Smith",
      job: "Designer",
      img: "pic2.webp",
      review: "The product's design is visually appealing and intuitive. It's a perfect fit for my design projects. I've received positive feedback from clients as well.",
      reviewDate: "2024-07-20",
      rating: 4.2
    },
    {
      id: 3,
      name: "Michael Johnson",
      job: "Marketing Manager",
      img: "pic3.webp",
      review: "This product has exceeded my expectations in terms of performance and user experience. It's a valuable tool for our marketing team.",
      reviewDate: "2024-06-15",
      rating: 4.8
    },
    {
      id: 4,
      name: "Emily Brown",
      job: "Project Manager",
      img: "pic4.webp",
      review: "The product's features are well-organized and easy to navigate. It has helped streamline our project management processes.",
      reviewDate: "2024-05-30",
      rating: 4.0
    },
    {
      id: 5,
      name: "David Lee",
      job: "Data Analyst",
      img: "pic5.webp",
      review: "As a data analyst, I've found this product to be incredibly helpful. It provides valuable insights and has improved our decision-making process.",
      reviewDate: "2024-04-10",
      rating: 4.7
    }
  ];
  
  

  const imgs = document.getElementById("person-img")
  const names = document.getElementById("Name")
  const jobs = document.getElementById("jobTitle")
  const reviewContents = document.getElementById("reviewContent")
  const reviewDates = document.getElementById("reviewDate")
  const arrowLeft = document.getElementById("arrowLeft")
  const arrowRight = document.getElementById("arrowRight")


  currentIndex = 0
showItem(currentIndex)
function showItem(person){
    const items = data[person]
    imgs.src = items.img
    names.textContent = items.name
    jobs.textContent = items.job
    reviewContents.textContent = items.review
    reviewDates.textContent = items.reviewDate
}

arrowLeft.addEventListener('click', function(){
    currentIndex--
    if(currentIndex == 0){
        currentIndex = data.length - 1
    }
    showItem(currentIndex)
})

arrowRight.addEventListener('click', function(){
    currentIndex++
    if(currentIndex > data.length - 1){
        currentIndex = 0
    }
    showItem(currentIndex)
})
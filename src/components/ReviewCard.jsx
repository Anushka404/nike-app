const ReviewCard = ({imgURL, customerName, feedback, rating}) => {
  return (
    <div className="flex justify-center items-center flex-col">
     <img 
     src={imgURl}
     alt="customer"
     className="rounded-full object-cover w-[120px] h-[120px]"
     />    
        
    </div>
  )
}

export default ReviewCard
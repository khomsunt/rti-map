import React from 'react'

const About = () => {
  return (
    <div className="mb-16">
      <div className="hero-content flex-col lg:flex-row">
        <img src="https://get.wallhere.com/photo/nature-landscape-1429571.jpg" className="shadow-2xl" />
        <h1 className='text-6xl font-bold mt-10 ml-16 text-shadow-custom text-center'>เกี่ยวกับเรา</h1>
        <hr className="mx-auto w-36 mt-5 border-gray-400"></hr>
        <p className='text-4xl mt-10 ml-16 text-center'>สถานที่ท่องเที่ยวในประเทศไทยที่น่าสนใจ</p>
        <div className='grid grid-cols-2 gap-2'>
          <div >
            <p className='text-2xl font-meduim mt-16 ml-40'>วัดร่องขุน จังหวัดเรียงราย</p>
            <img src="https://content.skyscnr.com/m/101c2e3b26827c4d/original/GettyImages-472699356.jpg?resize=1800px:1800px&quality=100" className="shadow-2xl w-3/5 ml-36 mt-5 rounded-lg" />
          </div>
          <div>
            <p className='text-2xl font-meduim mt-16 ml-40'>ดอยอินทนนท์ จังหวัดเชียงใหม่</p>
            <img src="https://content.skyscnr.com/m/2ec86cec1dd078be/original/GettyImages-471176780.jpg?resize=1800px:1800px&quality=100" className="shadow-2xl w-3/5 ml-36 mt-5 rounded-lg" />
          </div>
          <div>
            <p className='text-2xl font-meduim mt-16 ml-40'>อุทยานประวัติศาสตร์สุโขทัย จังหวัดสุโขทัย</p>
            <img src="https://content.skyscnr.com/m/717f37747e82db7d/original/GettyImages-477599803.jpg?resize=1800px:1800px&quality=100" className="shadow-2xl w-3/5 ml-36 mt-5 rounded-lg" />
          </div>
          <div>
            <p className='text-2xl font-meduim mt-16 ml-40'>สามพันโบก จังหวัดอุบลราชธานี</p>
            <img src="https://content.skyscnr.com/m/5d2172e04d2c4985/original/GettyImages-482107216.jpg?resize=1800px:1800px&quality=100" className="shadow-2xl w-3/5 ml-36 mt-5 rounded-lg" />
          </div>
          <div>
            <p className='text-2xl font-meduim mt-16 ml-40'>เกาะพีพี จังหวัดกระบี่</p>
            <img src="https://content.skyscnr.com/m/5a030522220ae3aa/original/GettyImages-178744591_doc.jpg?resize=1800px:1800px&quality=100" className="shadow-2xl w-3/5 ml-36 mt-5 rounded-lg" />
          </div>
          <div>
            <p className='text-2xl font-meduim mt-16 ml-40'>ปราสาทหินพนมรุ้ง จังหวัดบุรีรัมย์</p>
            <img src="https://content.skyscnr.com/m/0ac8713d45830d9e/original/GettyImages-485805928.jpg?resize=1800px:1800px&quality=100" className="shadow-2xl w-3/5 ml-36 mt-5 rounded-lg" />
          </div>
          <div>
            <p className='text-2xl font-meduim mt-16 ml-40'>ปราสาทหินพิมาย จังหวัดนครราชสีมา</p>
            <img src="https://content.skyscnr.com/m/622adfce027cb90a/original/GettyImages-513780733_doc.jpg?resize=1800px:1800px&quality=100" className="shadow-2xl w-3/5 ml-36 mt-5 rounded-lg" />
          </div>
          <div>
            <p className='text-2xl font-meduim mt-16 ml-40'>วัดพระธาตุพนมวรมหาวิหาร จังหวัดนครพนม</p>
            <img src="https://www.agilenttours.com/uploads/img_tour/691.jpg" className="shadow-2xl w-3/5 ml-36 mt-5 rounded-lg" />
          </div>
        </div>
      </div>
      <form className="max-w-md  p-10 text-black rounded-lg shadow-xl mt-10">
        <h1 className='text-center text-xl '>กรอกข้อมูล</h1>
      <div className='border-black mt-4'>
        <label htmlFor="username" className="block text-black text-sm font-bold mb-2">Username :</label>
        <input
          type="text"
          id="username"
          name="username"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className='border-black mt-4'>
        <label htmlFor="password" className="block text-black text-sm font-bold mb-2">Password :</label>
        <input
          type="password"
          id="password"
          name="password"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>
      <button type="submit" className="mx-auto w-28 bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 mt-10">Login</button>
    </form>
    </div>
  )
}

export default About
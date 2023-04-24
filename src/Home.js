import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
        <div className='home_container'>
            <img className='home_image' src='https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?cs=srgb&dl=pexels-designecologist-1779487.jpg&fm=jpg' alt=''/>

            <div className='home_row'>
                <Product
                  title={"The best laptop of this year, with the latest technologies"}
                  price={899.99}
                  image="https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGxhcHRvcHxlbnwwfHwwfHw%3D&w=1000&q=80"
                  rating={4}
                />
                <Product
                   title={"Copyright ownership gives the owner the exclusive right to use the work"}
                   price={2099.99}
                   image="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iphone/iphone-14-pro-max-colors.png"
                   rating={5}
                />
            </div>
            <div className='home_row'>
              <Product
                 title={"Winter 2023 Catalog A Renewed Form of Expression "}
                 price={499.99}
                 image="https://images.squarespace-cdn.com/content/v1/58464ccd2e69cfe01a346e95/1673898781702-EXIOJAI72NNWHQ19ERR0/paloma1.jpg?format=1000w"
                 rating={4}
              />
              <Product
                 title={"Gaming kayboard, keyboard, maddog, technology, HD wallpaper"}
                 price={19.99}
                 image="https://w0.peakpx.com/wallpaper/562/323/HD-wallpaper-gaming-kayboard-keyboard-maddog-technology.jpg"
                 rating={5}
              />
              <Product
                 title={"Gather your equipment. To clean your optical mouse"}
                 price={19.99}
                 image="https://www.wikihow.com/images/c/cb/Clean-Gunk-Off-of-an-Optical-Computer-Mouse-Step-16-Version-2.jpg"
                 rating={5}
              />
            </div>
            <div className='home_row'>
              <Product
                 title={"Browse 564,592 toy photos and images available, or search for toy box "}
                 price={19.99}
                 image="https://media.gettyimages.com/id/1297600404/photo/toy-robot-surrounded-by-other-toys-on-the-carpet-in-child-bedroom.jpg?s=612x612&w=gi&k=20&c=3jxCjyObS-MB9Bt9qgABU3cJBwDTTLsbYIZ7mubXpWA="
                 rating={5}
              />
              <Product
              
              title={"Street trend work pants Men's Casual Multi-pocket"}
              price={19.99}
              image="https://lzd-img-global.slatic.net/g/p/8799eeaef87f3f33534420b52e0fd9e8.jpg_720x720q80.jpg_.webp"
              rating={5}/>
            </div>


        </div>
    </div>
  )
}

export default Home

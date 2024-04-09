import Link from "next/link"

function Footer() {
  return (
    <footer className=" bg-black text-gray-400">
        <div className=" max-w-6xl max-auto grid grid-clos-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
            <div>
                <h1 className="text-xl font-bold text-white">About US</h1>
                <p>Music School is a premier institution dedicated to teaching the art and science of music </p>
            </div>
            <div>
                <h1  className="text-xl font-bold text-white">Quick Link</h1>
                <ul>
                    <li>
                        <Link href={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link href={'/about'}>About</Link>
                    </li>
                    <li>
                        <Link href={'/courses'}>Courses</Link>
                    </li>
                </ul>
            </div>
            <div><h1 className="text-xl font-bold text-white">Follow Us</h1>
            <p>Facebook</p>
            <p>Instagram</p>
            </div>
            <div>
                <h1 className="text-xl font-bold text-white">Contact Us</h1>
                <p>Bansathali,Kathmandu</p>
                <p>Phone.No :9863392000</p>
                <p>Email:MusicWorld123@gmail.com</p>
            </div>
        </div>
        <p className="text-center text-xs pt-8"> &copy; 2024 Music School. All right reserved.</p>
         
    </footer>
  )
}

export default Footer

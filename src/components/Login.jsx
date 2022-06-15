import "../styles/login.css";
import RippleButton from "./RippleButton";
const _3dObjectImg = require("../images/3d_objects.png");

export default function Login(props) {

	return (
		<main className="flex h-screen bg-gray-100">
			<section className="w-2/6 bg-blue-jelly">
				<div className="h-screen flex items-center justify-end relative ml-20 -mr-28">
					<img className="absolute right-0 drop-shadow-2xl" src={_3dObjectImg} alt="3d objects" />
				</div>
			</section>
			<section className="w-4/6 pl-32 -ml-10 bg-gray-100 rounded-l-[44px]">
				<div className="w-4/6 m-auto h-screen flex items-center justify-center flex-col">
					<h1 className="font-semibold text-3xl mb-10">Create Account</h1>
					<h1 className="text-gray-600">- OR -</h1>
					<form className="w-full text-lg my-10">
						<div class="grid xl:grid-cols-2 xl:gap-6">
							<div class="relative z-0 w-full mb-6 group">
								<input type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-jelly peer" placeholder=" " required />
								<label for="floating_first_name" class="peer-focus:font-medium absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-jelly peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
							</div>
							<div class="relative z-0 w-full mb-6 group">
								<input type="text" name="floating_last_name" id="floating_last_name" class="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-jelly peer" placeholder=" " required />
								<label for="floating_last_name" class="peer-focus:font-medium absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-jelly peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
							</div>
						</div>
						<div class="relative z-0 w-full mb-6 group">
							<input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" class="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-jelly peer" placeholder=" " required />
							<label for="floating_phone" class="peer-focus:font-medium absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-jelly peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
						</div>
						<div class="relative z-0 w-full mb-6 group">
							<input type="email" name="floating_email" class="block py-2.5 px-0 w-full text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-jelly peer" placeholder=" " required />
							<label for="floating_email" class="peer-focus:font-medium absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-jelly peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
						</div>
						<div class="grid xl:grid-cols-2 xl:gap-6">
							<div class="relative z-0 w-full mb-6 group">
								<input type="password" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-jelly peer" placeholder=" " required />
								<label for="floating_password" class="peer-focus:font-medium absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-jelly peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
							</div>
							<div class="relative z-0 w-full mb-6 group">
								<input type="password" name="repeat_password" id="floating_repeat_password" class="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-jelly peer" placeholder=" " required />
								<label for="floating_repeat_password" class="peer-focus:font-medium absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-jelly peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
							</div>
						</div>
						<RippleButton class="px-6 py-2 mt-3 text-lg text-white bg-blue-jelly hover:bg-blue-jelly focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-full sm:w-auto text-center">
							Sign up
						</RippleButton>
					</form>
				</div>
			</section>
		</main>
	);
}

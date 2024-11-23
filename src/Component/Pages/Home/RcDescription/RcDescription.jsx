
import bgImg from '../../../../assets/home/chef-service.jpg'
const RcDescription = () => {
    return (
        <div className="relative">
        {/* Background Image */}
        <div>
          <img src={bgImg} alt="" className="w-full" />
        </div>
        {/* Bottom Centered Content with Opacity */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-30 text-black py-8 px-4 text-center w-3/4 shadow-lg">
          <h3 className="py-4 text-xl font-bold font-serif">ROYAL CHEF</h3>
          <p>
            Welcome to ROYAL CHEF, where culinary traditions from around the world come together to create an unforgettable dining experience. Our multi-cuisine restaurant offers a diverse range of flavorful dishes, expertly crafted to satisfy every craving. From the bold spices of Indian cuisine to the delicate tastes of Italian pasta, and the savory delights of Asian specialties, our menu is a celebration of global flavors. Whether you’re in the mood for a hearty meal or a light, fresh option, our chefs use only the finest ingredients to bring you a dining experience that is both unique and delicious. With a warm, inviting ambiance and exceptional service, [Restaurant Name] is the perfect destination for family gatherings, romantic dinners, and special celebrations. Come join us and indulge in a world of flavors that will take your taste buds on a journey!
          </p>
        </div>
      </div>
      

        
        
    );
};

export default RcDescription;

import Providers from "@/components/providers/Providers"


const AuthLayout = async({
    children
}:{children: React.ReactNode},
  
) => {

  return (
      
      <div>
        {/* <NavbarRoutes/> */}
        <Providers> 
       {children}
        </Providers>
      </div>
    
  )
}
 


export default AuthLayout
 const env = process.env;

 export const nodeEnv =  env.NODE_ENV || 'development';

 export default{
     port:env.PORT||8080
 };


 

//  console.log(env);

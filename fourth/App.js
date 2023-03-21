import React from "react"; //react - core react package
import ReactDOM , {createRoot} from "react-dom/client"//reactdom - for manipulating dom
import './index.css';

const Title = () => {
return(
  <a href="/">
  <img 
      className="logo"
      alt="logo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnFozhTr0xgxy81TpJp1Ne99d50TdH9cJNjA&usqp=CAU" />
      </a>
      )
}
const Header = () => {   //functional component returns jsx
    return (
      
      <div className="header">   
      <Title/>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
};
//config driven ui -- where we have different component info based on city or any other object
//WILL BE ASKED IN THE SYSTEM DESIGN ROUND OF THE INTERVIEW,FETCHING DATA FROM BACKEND OR FROM AN API
// const config = [
//   {
//     type: "carousel",
//     cards:[
//       {
//         offerName: "50% off"
//       },
//       {
//         offerName: "No Delivery Charge"
//       }
//     ]
//   },
//   {
//     type: "restaurants",
//     cards: [
//       {
//         name: "MKOP",
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjUAKwC_g_au1aPsRTfV1UsPREC_DdGI0obpjcDZAIdnNMykKzqyH9_sEk_KRYoegy_bg&usqp=CAU",
//         cuisines: ["Cakes","Pastries"],
//         rating: "4.3"
//       },
//       {
//         name: "KFC",
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjUAKwC_g_au1aPsRTfV1UsPREC_DdGI0obpjcDZAIdnNMykKzqyH9_sEk_KRYoegy_bg&usqp=CAU",
//         cuisines: ["Burger","Wraps"],
//         rating: "4.3"
//       },
//       {
//         name: "Burger King",
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjUAKwC_g_au1aPsRTfV1UsPREC_DdGI0obpjcDZAIdnNMykKzqyH9_sEk_KRYoegy_bg&usqp=CAU",
//         cuisines: ["Pizza","Sauces"],
//         rating: "4.3"
//       }
//     ]

//   }
// ]


const restaurantList = [
  {
    type:"restaurant",
    data:{type:"F","id":"405248","name":"Mama Chicken Mama Franky House","uuid":"fea1253c-4202-4fcf-a6f1-1abce378b849","city":"45","area":"Civil lines","totalRatingsString":"100+ ratings","cloudinaryImageId":"m39tbjpwkz3n9gnbre5m","cuisines":["North Indian","Mughlai"],"tags":[],"costForTwo":40000,"costForTwoString":"₹400 FOR TWO","deliveryTime":29,"minDeliveryTime":29,"maxDeliveryTime":29,"slaString":"29 MINS","lastMileTravel":6.800000190734863,"slugs":{"restaurant":"mama-chicken-mama-franky-sikandra-sikandra","city":"agra"},"cityState":"45","address":"80, Sec-9, AVAS VIKAS COLONY SIKANDRA, Agra","locality":"Sikandra","parentId":11212,"unserviceable":false,"veg":false,"select":false,"favorite":false,"tradeCampaignHeaders":[],"aggregatedDiscountInfo":{"header":"FLAT125 off","shortDescriptionList":[{"meta":"FLAT125 off | Use FLATDEAL","discountType":"Flat","operationType":"RESTAURANT"}],"descriptionList":[{"meta":"FLAT125 off | Use FLATDEAL","discountType":"Flat","operationType":"RESTAURANT"}],"subHeader":"","headerType":0,"superFreedel":""},"aggregatedDiscountInfoV2":{"header":"₹125 OFF","shortDescriptionList":[{"meta":"Use FLATDEAL","discountType":"Flat","operationType":"RESTAURANT"}],"descriptionList":[{"meta":"FLAT125 off | Use FLATDEAL","discountType":"Flat","operationType":"RESTAURANT"}],"subHeader":"","headerType":0,"superFreedel":""},"ribbon":[{"type":"PROMOTED"}],"chain":[],"feeDetails":{"fees":[{"name":"distance","fee":4200,"message":""},{"name":"time","fee":0,"message":""},{"name":"special","fee":0,"message":""}],"totalFees":4200,"message":"","title":"Delivery Charge","amount":"4200","icon":""},"availability":{"opened":true,"nextOpenMessage":"","nextCloseMessage":""},"longDistanceEnabled":0,"rainMode":"NONE","thirdPartyAddress":false,"thirdPartyVendor":"","adTrackingID":"cid=6136718~p=1~eid=00000186-f093-3148-11b4-137c00ec014b","badges":{"imageBased":[],"textBased":[],"textExtendedBadges":[]},"lastMileTravelString":"6.8 kms","hasSurge":false,"sla":{"restaurantId":"405248","deliveryTime":29,"minDeliveryTime":29,"maxDeliveryTime":29,"lastMileTravel":6.800000190734863,"lastMileDistance":0,"serviceability":"SERVICEABLE","rainMode":"NONE","longDistance":"NOT_LONG_DISTANCE","preferentialService":false,"iconType":"EMPTY"},"promoted":true,"avgRating":"3.7","totalRatings":100,"new":false},"subtype":"basic"},{"type":"restaurant","data":{"type":"F","id":"102974","name":"Cake House","uuid":"fdd3eb40-d25f-4352-b823-37dead67ba06","city":"45","area":"Civil Lines","totalRatingsString":"10000+ ratings","cloudinaryImageId":"zbgd7yi5gv4ivcgssagh","cuisines":["Bakery","Desserts"],"tags":[],"costForTwo":15000,"costForTwoString":"₹150 FOR TWO","deliveryTime":23,"minDeliveryTime":23,"maxDeliveryTime":23,"slaString":"23 MINS","lastMileTravel":0.5,"slugs":{"restaurant":"cake-house-civil-lines-civil-lines","city":"agra"},"cityState":"45","address":"23/301, Wazirpura Rd, Judge Compound Chowraha, Wazirpura, Civil Lines, Agra","locality":"Wazirpura Rd","parentId":8539,"unserviceable":false,"veg":false,"select":false,"favorite":false,"tradeCampaignHeaders":[],"aggregatedDiscountInfo":{"header":"60% off","shortDescriptionList":[{"meta":"60% off | Use TRYNEW","discountType":"Percentage","operationType":"RESTAURANT"}],"descriptionList":[{"meta":"60% off up to ₹120 | Use code TRYNEW","discountType":"Percentage","operationType":"RESTAURANT"}],"subHeader":"","headerType":0,"superFreedel":""},"aggregatedDiscountInfoV2":{"header":"60% OFF","shortDescriptionList":[{"meta":"Use TRYNEW","discountType":"Percentage","operationType":"RESTAURANT"}],"descriptionList":[{"meta":"60% off up to ₹120 | Use code TRYNEW","discountType":"Percentage","operationType":"RESTAURANT"}],"subHeader":"","headerType":0,"superFreedel":""},"chain":[],"feeDetails":{"fees":[{"name":"distance","fee":1900,"message":""},{"name":"time","fee":0,"message":""},{"name":"special","fee":0,"message":""}],"totalFees":1900,"message":"","title":"Delivery Charge","amount":"1900","icon":""},"availability":{"opened":true,"nextOpenMessage":"","nextCloseMessage":"Closes soon"},"longDistanceEnabled":0,"rainMode":"NONE","thirdPartyAddress":false,"thirdPartyVendor":"","adTrackingID":"","badges":{"imageBased":[],"textBased":[],"textExtendedBadges":[]},"lastMileTravelString":"0.5 kms","hasSurge":false,"sla":{"restaurantId":"102974","deliveryTime":23,"minDeliveryTime":23,"maxDeliveryTime":23,"lastMileTravel":0.5,"lastMileDistance":0,"serviceability":"SERVICEABLE","rainMode":"NONE","longDistance":"NOT_LONG_DISTANCE","preferentialService":false,"iconType":"EMPTY"},"promoted":false,"avgRating":"3.2","totalRatings":10000,"new":false},"subtype":"basic"},{"type":"restaurant","data":{"type":"F","id":"254105","name":"McDonald's","uuid":"08c10acd-1c5a-4e8c-be25-b2c7215fb5c9","city":"45","area":"Civil Lines","totalRatingsString":"5000+ ratings","cloudinaryImageId":"1293a58ab5610f4c730c3d8cb6ac1b65","cuisines":["American"],"tags":[],"costForTwo":40000,"costForTwoString":"₹400 FOR TWO","deliveryTime":22,"minDeliveryTime":22,"maxDeliveryTime":22,"slaString":"22 MINS","lastMileTravel":1.399999976158142,"slugs":{"restaurant":"mcdonalds-up-agra-cosmos-mall-civil-lines","city":"agra"},"cityState":"45","address":"UP Agra Cosmos Mall, Shop No. U G A- 4 & 5. Upper Ground Floor, Ashok Cosmos Mall.Agra- 282001","locality":"Cosmos Mall","parentId":630,"unserviceable":false,"veg":false,"select":false,"favorite":false,"tradeCampaignHeaders":[],"chain":[],"feeDetails":{"fees":[{"name":"distance","fee":1900,"message":""},{"name":"time","fee":0,"message":""},{"name":"special","fee":0,"message":""}],"totalFees":1900,"message":"","title":"Delivery Charge","amount":"1900","icon":""},"availability":{"opened":true,"nextOpenMessage":"","nextCloseMessage":""},"longDistanceEnabled":0,"rainMode":"NONE","thirdPartyAddress":false,"thirdPartyVendor":"","adTrackingID":"","badges":{"imageBased":[],"textBased":[],"textExtendedBadges":[]},"lastMileTravelString":"1.3 kms","hasSurge":false,"sla":{"restaurantId":"254105","deliveryTime":22,"minDeliveryTime":22,"maxDeliveryTime":22,"lastMileTravel":1.399999976158142,"lastMileDistance":0,"serviceability":"SERVICEABLE","rainMode":"NONE","longDistance":"NOT_LONG_DISTANCE","preferentialService":false,"iconType":"EMPTY"},"promoted":false,"avgRating":"3.9","totalRatings":5000,"new":false},"subtype":"basic"},{"type":"restaurant","data":{"type":"F","id":"499515","name":"La Pino'z Pizza","uuid":"a20af957-feb0-4809-8686-6473805c7c89","city":"45","area":"Agra Cantt","totalRatingsString":"500+ ratings","cloudinaryImageId":"sclhgvqa6tutskodwusf","cuisines":["Pizzas","Italian"],"tags":[],"costForTwo":30000,"costForTwoString":"₹300 FOR TWO","deliveryTime":29,"minDeliveryTime":29,"maxDeliveryTime":29,"slaString":"29 MINS","lastMileTravel":5.900000095367432,"slugs":{"restaurant":"la-pino’z-pizza-tajganj-tajganj","city":"agra"},"cityState":"45","address":"Shop no. E-23, shopping arcade, sadar bazaar, Agra","locality":"Deep Sikha","parentId":4961,"unserviceable":false,"veg":false,"select":false,"favorite":false,"tradeCampaignHeaders":[],"ribbon":[{"type":"PROMOTED"}],"chain":[],"feeDetails":{"fees":[{"name":"distance","fee":2900,"message":""},{"name":"time","fee":0,"message":""},{"name":"special","fee":0,"message":""}],"totalFees":2900,"message":"","title":"Delivery Charge","amount":"2900","icon":""},"availability":{"opened":true,"nextOpenMessage":"","nextCloseMessage":""},"longDistanceEnabled":0,"rainMode":"NONE","thirdPartyAddress":false,"thirdPartyVendor":"","adTrackingID":"cid=6206106~p=7~eid=00000186-f093-3148-11b4-137e00ec073d","badges":{"imageBased":[],"textBased":[],"textExtendedBadges":[]},"lastMileTravelString":"5.9 kms","hasSurge":false,"sla":{"restaurantId":"499515","deliveryTime":29,"minDeliveryTime":29,"maxDeliveryTime":29,"lastMileTravel":5.900000095367432,"lastMileDistance":0,"serviceability":"SERVICEABLE","rainMode":"NONE","longDistance":"NOT_LONG_DISTANCE","preferentialService":false,"iconType":"EMPTY"},"promoted":true,"avgRating":"3.8","totalRatings":500,"new":false},"subtype":"basic"},{"type":"restaurant","data":{"type":"F","id":"454743","name":"New Pizza King","uuid":"10990ae6-fbd4-4ddc-9ccd-83826723123b","city":"45","area":"Dayal Bagh","totalRatingsString":"1000+ ratings","cloudinaryImageId":"d3liegrnnxdcko9jlsyu","cuisines":["Pizzas"],"tags":[],"costForTwo":30000,"costForTwoString":"₹300 FOR TWO","deliveryTime":22,"minDeliveryTime":22,"maxDeliveryTime":22,"slaString":"22 MINS","lastMileTravel":1.100000023841858,"slugs":{"restaurant":"the-new-pizza-king-dayanand-nagar-dayanand-nagar","city":"agra"},"cityState":"45","address":"6/202 DayalBagh Road, WARD NO. 25 NAGLA PADI, Nagar Nigam Food Safety Zone 04, Agra, Uttar Pradesh - 282005","locality":"DayalBagh Road","parentId":9833,"unserviceable":false,"veg":false,"select":false,"favorite":false,"tradeCampaignHeaders":[],"aggregatedDiscountInfo":{"header":"60% off","shortDescriptionList":[{"meta":"60% off | Use TRYNEW","discountType":"Percentage","operationType":"RESTAURANT"}],"descriptionList":[{"meta":"60% off up to ₹120 | Use code TRYNEW","discountType":"Percentage","operationType":"RESTAURANT"}],"subHeader":"","headerType":0,"superFreedel":""},"aggregatedDiscountInfoV2":{"header":"60% OFF","shortDescriptionList":[{"meta":"Use TRYNEW","discountType":"Percentage","operationType":"RESTAURANT"}],"descriptionList":[{"meta":"60% off up to ₹120 | Use code TRYNEW","discountType":"Percentage","operationType":"RESTAURANT"}],"subHeader":"","headerType":0,"superFreedel":""},"chain":[],"feeDetails":{"fees":[{"name":"distance","fee":1900,"message":""},{"name":"time","fee":0,"message":""},{"name":"special","fee":0,"message":""}],"totalFees":1900,"message":"","title":"Delivery Charge","amount":"1900","icon":""},"availability":{"opened":true,"nextOpenMessage":"","nextCloseMessage":""},"longDistanceEnabled":0,"rainMode":"NONE","thirdPartyAddress":false,"thirdPartyVendor":"","adTrackingID":"","badges":{"imageBased":[],"textBased":[],"textExtendedBadges":[]},"lastMileTravelString":"1.1 kms","hasSurge":false,"sla":{"restaurantId":"454743","deliveryTime":22,"minDeliveryTime":22,"maxDeliveryTime":22,"lastMileTravel":1.100000023841858,"lastMileDistance":0,"serviceability":"SERVICEABLE","rainMode":"NONE","longDistance":"NOT_LONG_DISTANCE","preferentialService":false,"iconType":"EMPTY"},"promoted":false,"avgRating":"4.1","totalRatings":1000,"new":false},"subtype":"basic"},{"type":"restaurant","data":{"type":"F","id":"570253","name":"Burger King","uuid":"67907e1c-59c4-4c30-b733-d6af84b855b4","city":"45","area":"Jawaharnagar Colony","totalRatingsString":"1000+ ratings","cloudinaryImageId":"yxurm55uggserc3biuol","cuisines":["Burgers","American"],"tags":[],"costForTwo":35000,"costForTwoString":"₹350 FOR TWO","deliveryTime":21,"minDeliveryTime":21,"maxDeliveryTime":21,"slaString":"21 MINS","lastMileTravel":1.2000000476837158,"slugs":{"restaurant":"burger-king-srk-mall-agra-dayanand-nagar","city":"agra"},"cityState":"45","address":"Shop No:37 Sarv SRK Mall 3/26 Nagla Padi Delhi cccc282002","locality":"Jawaharnagar Colony","parentId":166,"unserviceable":false,"veg":false,"select":false,"favorite":false,"tradeCampaignHeaders":[],"aggregatedDiscountInfo":{"header":"60% off","shortDescriptionList":[{"meta":"60% off | Use STEALDEAL","discountType":"Percentage","operationType":"RESTAURANT"}],"descriptionList":[{"meta":"60% off up to ₹120 | Use code STEALDEAL","discountType":"Percentage","operationType":"RESTAURANT"}],"subHeader":"","headerType":0,"superFreedel":""},"aggregatedDiscountInfoV2":{"header":"60% OFF","shortDescriptionList":[{"meta":"Use STEALDEAL","discountType":"Percentage","operationType":"RESTAURANT"}],"descriptionList":[{"meta":"60% off up to ₹120 | Use code STEALDEAL","discountType":"Percentage","operationType":"RESTAURANT"}],"subHeader":"","headerType":0,"superFreedel":""},"chain":[],"feeDetails":{"fees":[{"name":"distance","fee":1900,"message":""},{"name":"time","fee":0,"message":""},{"name":"special","fee":0,"message":""}],"totalFees":1900,"message":"","title":"Delivery Charge","amount":"1900","icon":""},"availability":{"opened":true,"nextOpenMessage":"","nextCloseMessage":""},"longDistanceEnabled":0,"rainMode":"NONE","thirdPartyAddress":false,"thirdPartyVendor":"","adTrackingID":"","badges":{"imageBased":[],"textBased":[],"textExtendedBadges":[]},"lastMileTravelString":"1.2 kms","hasSurge":false,"sla":{"restaurantId":"570253","deliveryTime":21,"minDeliveryTime":21,"maxDeliveryTime":21,"lastMileTravel":1.2000000476837158,"lastMileDistance":0,"serviceability":"SERVICEABLE","rainMode":"NONE","longDistance":"NOT_LONG_DISTANCE","preferentialService":false,"iconType":"EMPTY"},"promoted":false,"avgRating":"4.0","totalRatings":1000,"new":false},"subtype":"basic"},{"type":"restaurant","data":{"type":"F","id":"74721","name":"Pizza Hut","uuid":"59985188-6405-4bb3-b7bd-725afb0f8cd2","city":"45","area":"Civil Lines","totalRatingsString":"1000+ ratings","cloudinaryImageId":"o9psdcirq5fhlwbegcda","cuisines":["Pizzas","Fast Food"],"tags":[],"costForTwo":35000,"costForTwoString":"₹350 FOR TWO","deliveryTime":21,"minDeliveryTime":21,"maxDeliveryTime":21,"slaString":"21 MINS","lastMileTravel":0.8999999761581421,"slugs":{"restaurant":"pizza-hut-sanjay-place-agra-test-agra","city":"agra"},"cityState":"45","address":"Shop no. 25, Deepshikha Towers , Sanjay Place, Next to Sanjay Talkies , Agra","locality":"Sanjay Place","parentId":721,"unserviceable":false,"veg":false,"select":false,"favorite":false,"tradeCampaignHeaders":[],"chain":[],"feeDetails":{"fees":[{"name":"distance","fee":1900,"message":""},{"name":"time","fee":0,"message":""},{"name":"special","fee":0,"message":""}],"totalFees":1900,"message":"","title":"Delivery Charge","amount":"1900","icon":""},"availability":{"opened":true,"nextOpenMessage":"","nextCloseMessage":""},"longDistanceEnabled":0,"rainMode":"NONE","thirdPartyAddress":false,"thirdPartyVendor":"","adTrackingID":"","badges":{"imageBased":[],"textBased":[],"textExtendedBadges":[]},"lastMileTravelString":"0.8 kms","hasSurge":false,"sla":{"restaurantId":"74721","deliveryTime":21,"minDeliveryTime":21,"maxDeliveryTime":21,"lastMileTravel":0.8999999761581421,"lastMileDistance":0,"serviceability":"SERVICEABLE","rainMode":"NONE","longDistance":"NOT_LONG_DISTANCE","preferentialService":false,"iconType":"EMPTY"},"promoted":false,"avgRating":"3.5","totalRatings":1000,"new":false},"subtype":"basic"},{"type":"restaurant","data":{"type":"F","id":"493479","name":"Kwality Walls Frozen Dessert and Ice Cream Shop","uuid":"4ab2b79a-3bca-4d99-bb20-ff5f96865fc0","city":"45","area":"Trans Yamuna","totalRatingsString":"100+ ratings","cloudinaryImageId":"dqxmhnh3tpoysx8p2los","cuisines":["Desserts","Ice Cream","Ice Cream Cakes"],"tags":[],"costForTwo":20000,"costForTwoString":"₹200 FOR TWO","deliveryTime":29,"minDeliveryTime":29,"maxDeliveryTime":29,"slaString":"29 MINS","lastMileTravel":4.900000095367432,"slugs":{"restaurant":"kwality-walls-frozen-dessert-and-ice-cream-shop-dayanand-nagar-dayanand-nagar-4","city":"agra"},"cityState":"45","address":"RADHA TRADERS: C-582 TRANS YAMUN AGRA WARD NO 84 TRANS YAMUNA COLONY A.B.C NAGAR NIGAM FOOD SAFETY ZONE 15 AGRA UTTAR PRADESH- 282006 (HUL- IA4A071P2187)","locality":"yamuna Colony","parentId":582,"unserviceable":false,"veg":true,"select":false,"favorite":false,"tradeCampaignHeaders":[],"aggregatedDiscountInfo":{"header":"50% off","shortDescriptionList":[{"meta":"50% off | Use SWIGGYIT","discountType":"Percentage","operationType":"RESTAURANT"}],"descriptionList":[{"meta":"50% off up to ₹100 on select items | Use code SWIGGYIT","discountType":"Percentage","operationType":"RESTAURANT"}],"subHeader":"","headerType":0,"superFreedel":""},"aggregatedDiscountInfoV2":{"header":"50% OFF","shortDescriptionList":[{"meta":"Use SWIGGYIT","discountType":"Percentage","operationType":"RESTAURANT"}],"descriptionList":[{"meta":"50% off up to ₹100 on select items | Use code SWIGGYIT","discountType":"Percentage","operationType":"RESTAURANT"}],"subHeader":"","headerType":0,"superFreedel":""},"ribbon":[{"type":"PROMOTED"}],"chain":[],"feeDetails":{"fees":[{"name":"distance","fee":2400,"message":""},{"name":"time","fee":0,"message":""},{"name":"special","fee":0,"message":""}],"totalFees":2400,"message":"","title":"Delivery Charge","amount":"2400","icon":""},"availability":{"opened":true,"nextOpenMessage":"","nextCloseMessage":""},"longDistanceEnabled":0,"rainMode":"NONE","thirdPartyAddress":false,"thirdPartyVendor":"","adTrackingID":"cid=6199154~p=10~eid=00000186-f093-3148-11b4-137f00ec0a16","badges":{"imageBased":[],"textBased":[],"textExtendedBadges":[]},"lastMileTravelString":"4.9 kms","hasSurge":false,"sla":{"restaurantId":"493479","deliveryTime":29,"minDeliveryTime":29,"maxDeliveryTime":29,"lastMileTravel":4.900000095367432,"lastMileDistance":0,"serviceability":"SERVICEABLE","rainMode":"NONE","longDistance":"NOT_LONG_DISTANCE","preferentialService":false,"iconType":"EMPTY"},"promoted":true,"avgRating":"4.5","totalRatings":100,"new":false},"subtype":"basic"},{"type":"restaurant","data":{"type":"F","id":"76028","name":"What The Food","uuid":"062ca85e-1620-41e3-8367-6b0f37efc03b","city":"45","area":"Khandari","totalRatingsString":"1000+ ratings","cloudinaryImageId":"obfa0hojkcajgx4klpml","cuisines":["North Indian","Chinese","Fast Food"],"tags":[],"costForTwo":30000,"costForTwoString":"₹300 FOR TWO","deliveryTime":22,"minDeliveryTime":22,"maxDeliveryTime":22,"slaString":"22 MINS","lastMileTravel":1.100000023841858,"slugs":{"restaurant":"what-the-food-kamla-nagar-civil-lines","city":"agra"},"cityState":"45","address":"Opposite Axis Imaging Centre, Near Hanuman Mandir, Khandari Road, Surya Nagar, Civil Lines, Agra","locality":"Defence Colony","parentId":9637,"unserviceable":false,"veg":false,"select":false,"favorite":false,"tradeCampaignHeaders":[],"aggregatedDiscountInfo":{"header":"30% off","shortDescriptionList":[{"meta":"30% off | Use TRYNEW","discountType":"Percentage","operationType":"RESTAURANT"}],"descriptionList":[{"meta":"30% off up to ₹75 | Use code TRYNEW","discountType":"Percentage","operationType":"RESTAURANT"}],"subHeader":"","headerType":0,"superFreedel":""},"aggregatedDiscountInfoV2":{"header":"30% OFF","shortDescriptionList":[{"meta":"Use TRYNEW","discountType":"Percentage","operationType":"RESTAURANT"}],"descriptionList":[{"meta":"30% off up to ₹75 | Use code TRYNEW","discountType":"Percentage","operationType":"RESTAURANT"}],"subHeader":"","headerType":0,"superFreedel":""},"chain":[],"feeDetails":{"fees":[{"name":"distance","fee":1900,"message":""},{"name":"time","fee":0,"message":""},{"name":"special","fee":0,"message":""}],"totalFees":1900,"message":"","title":"Delivery Charge","amount":"1900","icon":""},"availability":{"opened":true,"nextOpenMessage":"","nextCloseMessage":""},"longDistanceEnabled":0,"rainMode":"NONE","thirdPartyAddress":false,"thirdPartyVendor":"","adTrackingID":"","badges":{"imageBased":[],"textBased":[],"textExtendedBadges":[]},"lastMileTravelString":"1.1 kms","hasSurge":false,"sla":{"restaurantId":"76028","deliveryTime":22,"minDeliveryTime":22,"maxDeliveryTime":22,"lastMileTravel":1.100000023841858,"lastMileDistance":0,"serviceability":"SERVICEABLE","rainMode":"NONE","longDistance":"NOT_LONG_DISTANCE","preferentialService":false,"iconType":"EMPTY"},"promoted":false,"avgRating":"3.8","totalRatings":1000,"new":false},"subtype":"basic"},{"type":"restaurant","data":{"type":"F","id":"74578","name":"Aahar","uuid":"e94e9023-dcc7-4311-ad4a-47701ce39d6b","city":"45","area":"Civil Lines","totalRatingsString":"10000+ ratings","cloudinaryImageId":"p8q0nqbav9ffcgngdsgs","cuisines":["North Indian","South Indian","Chinese","Bakery","Continental","Desserts"],"tags":[],"costForTwo":40000,"costForTwoString":"₹400 FOR TWO","deliveryTime":24,"minDeliveryTime":24,"maxDeliveryTime":24,"slaString":"24 MINS","lastMileTravel":1.2999999523162842,"slugs":{"restaurant":"aahar-civil-lines-civil-lines","city":"agra"},"cityState":"45","address":"26/118, Opposite Income Tax Building, Sanjay Place, Civil Lines, Agra","locality":"Sanjay Place","parentId":1294,"unserviceable":false,"veg":true,"select":false,"favorite":false,"tradeCampaignHeaders":[],"aggregatedDiscountInfo":{"header":"50% off","shortDescriptionList":[{"meta":"50% off | Use TRYNEW","discountType":"Percentage","operationType":"RESTAURANT"}],"descriptionList":[{"meta":"50% off up to ₹100 | Use code TRYNEW","discountType":"Percentage","operationType":"RESTAURANT"}],"subHeader":"","headerType":0,"superFreedel":""},"aggregatedDiscountInfoV2":{"header":"50% OFF","shortDescriptionList":[{"meta":"Use TRYNEW","discountType":"Percentage","operationType":"RESTAURANT"}],"descriptionList":[{"meta":"50% off up to ₹100 | Use code TRYNEW","discountType":"Percentage","operationType":"RESTAURANT"}],"subHeader":"","headerType":0,"superFreedel":""},"chain":[],"feeDetails":{"fees":[{"name":"distance","fee":1900,"message":""},{"name":"time","fee":0,"message":""},{"name":"special","fee":0,"message":""}],"totalFees":1900,"message":"","title":"Delivery Charge","amount":"1900","icon":""},"availability":{"opened":true,"nextOpenMessage":"","nextCloseMessage":""},"longDistanceEnabled":0,"rainMode":"NONE","thirdPartyAddress":false,"thirdPartyVendor":"","adTrackingID":"","badges":{"imageBased":[],"textBased":[],"textExtendedBadges":[]},"lastMileTravelString":"1.2 kms","hasSurge":false,"sla":{"restaurantId":"74578","deliveryTime":24,"minDeliveryTime":24,"maxDeliveryTime":24,"lastMileTravel":1.2999999523162842,"lastMileDistance":0,"serviceability":"SERVICEABLE","rainMode":"NONE","longDistance":"NOT_LONG_DISTANCE","preferentialService":false,"iconType":"EMPTY"},"promoted":false,"avgRating":"4.0","totalRatings":10000,"new":false},"subtype":"basic"},{"type":"restaurant","data":{"type":"F","id":"74358","name":"Pind Balluchi","uuid":"8247e25a-c3c1-4122-b2f2-2f50662e8c8a","city":"45","area":"Tajganj","totalRatingsString":"1000+ ratings","cloudinaryImageId":"w3ybxjfua8l9lbcdkxs4","cuisines":["North Indian","Mughlai"],"tags":[],"costForTwo":40000,"costForTwoString":"₹400 FOR TWO","deliveryTime":38,"minDeliveryTime":38,"maxDeliveryTime":38,"slaString":"38 MINS","lastMileTravel":7.800000190734863,"slugs":{"restaurant":"pind-balluchi-tajganj-tajganj","city":"agra"},"cityState":"45","address":"Opposite Saga Emporium, Fatehabad Road, Tajganj, Agra","locality":"Fatehabad Road","parentId":6337,"unserviceable":false,"veg":false,"select":false,"favorite":false,"tradeCampaignHeaders":[],"aggregatedDiscountInfo":{"header":"FLAT125 off","shortDescriptionList":[{"meta":"FLAT125 off | Use FLATDEAL","discountType":"Flat","operationType":"RESTAURANT"}],"descriptionList":[{"meta":"FLAT125 off | Use FLATDEAL","discountType":"Flat","operationType":"RESTAURANT"}],"subHeader":"","headerType":0,"superFreedel":""},"aggregatedDiscountInfoV2":{"header":"₹125 OFF","shortDescriptionList":[{"meta":"Use FLATDEAL","discountType":"Flat","operationType":"RESTAURANT"}],"descriptionList":[{"meta":"FLAT125 off | Use FLATDEAL","discountType":"Flat","operationType":"RESTAURANT"}],"subHeader":"","headerType":0,"superFreedel":""},"ribbon":[{"type":"PROMOTED"}],"chain":[],"feeDetails":{"fees":[{"name":"distance","fee":4200,"message":""},{"name":"time","fee":0,"message":""},{"name":"special","fee":0,"message":""}],"totalFees":4200,"message":"","title":"Delivery Charge","amount":"4200","icon":""},"availability":{"opened":true,"nextOpenMessage":"","nextCloseMessage":""},"longDistanceEnabled":0,"rainMode":"NONE","thirdPartyAddress":false,"thirdPartyVendor":"","adTrackingID":"cid=6072623~p=13~eid=00000186-f093-3148-11b4-138000ec0d2a","badges":{"imageBased":[],"textBased":[],"textExtendedBadges":[]},"lastMileTravelString":"7.8 kms","hasSurge":false,"sla":{"restaurantId":"74358","deliveryTime":38,"minDeliveryTime":38,"maxDeliveryTime":38,"lastMileTravel":7.800000190734863,"lastMileDistance":0,"serviceability":"SERVICEABLE","rainMode":"NONE","longDistance":"NOT_LONG_DISTANCE","preferentialService":false,"iconType":"EMPTY"},"promoted":true,"avgRating":"3.7","totalRatings":1000,"new":false},"subtype":"basic"},{"type":"restaurant","data":{"type":"F","id":"431491","name":"Manoj Dhaba","uuid":"53297b8e-c4d2-4d6d-9ce7-3dc2e3aaea66","city":"45","area":"Dayal Bagh","totalRatingsString":"100+ ratings","cloudinaryImageId":"qrwsmlxghxtofimlnqyx","cuisines":["North Indian"],"tags":[],"costForTwo":40000,"costForTwoString":"₹400 FOR TWO","deliveryTime":14,"minDeliveryTime":14,"maxDeliveryTime":14,"slaString":"14 MINS","lastMileTravel":0.699999988079071,"slugs":{"restaurant":"manoj-dhaba-dayanand-nagar-dayanand-nagar","city":"agra"},"cityState":"45","address":"Shop 522, (pro due t Near bhagwan talkies, hariparbat, Agra       282005","locality":"Dayanand Nagar","parentId":250196,"unserviceable":false,"veg":false,"select":false,"favorite":false,"tradeCampaignHeaders":[],"chain":[],"feeDetails":{"fees":[{"name":"distance","fee":1900,"message":""},{"name":"time","fee":0,"message":""},{"name":"special","fee":0,"message":""}],"totalFees":1900,"message":"","title":"Delivery Charge","amount":"1900","icon":""},"availability":{"opened":true,"nextOpenMessage":"","nextCloseMessage":""},"longDistanceEnabled":0,"rainMode":"NONE","thirdPartyAddress":false,"thirdPartyVendor":"","adTrackingID":"","badges":{"imageBased":[],"textBased":[],"textExtendedBadges":[]},"lastMileTravelString":"0.6 kms","hasSurge":false,"sla":{"restaurantId":"431491","deliveryTime":14,"minDeliveryTime":14,"maxDeliveryTime":14,"lastMileTravel":0.699999988079071,"lastMileDistance":0,"serviceability":"SERVICEABLE","rainMode":"NONE","longDistance":"NOT_LONG_DISTANCE","preferentialService":false,"iconType":"EMPTY"},"promoted":false,"avgRating":"3.8","totalRatings":100,"new":false},"subtype":"basic"},{"type":"restaurant","data":{"type":"F","id":"603476","name":"Laziz Pizza","uuid":"0e8d7fe9-6b21-4ecb-a84e-ad2a584ece8a","city":"45","area":"Civil Lines","totalRatingsString":"Too Few Ratings","cloudinaryImageId":"kirnt8j05cet1bke5vum","cuisines":["Pizzas","Burgers","Pastas"],"tags":[],"costForTwo":27000,"costForTwoString":"₹270 FOR TWO","deliveryTime":20,"minDeliveryTime":20,"maxDeliveryTime":20,"slaString":"20 MINS","lastMileTravel":0.20000000298023224,"slugs":{"restaurant":"laziz-pizza-civil-lines-civil-lines-3","city":"agra"},"cityState":"45","address":"UG-2 Freind Trade Tower Nehru Nagar, Civil Lines, Agra, Uttar Pradesh 282003, India","locality":"Nehru Nagar","parentId":2299,"unserviceable":false,"veg":false,"select":false,"favorite":false,"tradeCampaignHeaders":[],"aggregatedDiscountInfo":{"header":"60% off","shortDescriptionList":[{"meta":"60% off | Use TRYNEW","discountType":"Percentage","operationType":"RESTAURANT"}],"descriptionList":[{"meta":"60% off up to ₹120 | Use code TRYNEW","discountType":"Percentage","operationType":"RESTAURANT"}],"subHeader":"","headerType":0,"superFreedel":""},"aggregatedDiscountInfoV2":{"header":"60% OFF","shortDescriptionList":[{"meta":"Use TRYNEW","discountType":"Percentage","operationType":"RESTAURANT"}],"descriptionList":[{"meta":"60% off up to ₹120 | Use code TRYNEW","discountType":"Percentage","operationType":"RESTAURANT"}],"subHeader":"","headerType":0,"superFreedel":""},"chain":[],"feeDetails":{"fees":[{"name":"distance","fee":1900,"message":""},{"name":"time","fee":0,"message":""},{"name":"special","fee":0,"message":""}],"totalFees":1900,"message":"","title":"Delivery Charge","amount":"1900","icon":""},"availability":{"opened":true,"nextOpenMessage":"","nextCloseMessage":""},"longDistanceEnabled":0,"rainMode":"NONE","thirdPartyAddress":false,"thirdPartyVendor":"","adTrackingID":"","badges":{"imageBased":[],"textBased":[],"textExtendedBadges":[]},"lastMileTravelString":"0.2 kms","hasSurge":false,"sla":{"restaurantId":"603476","deliveryTime":20,"minDeliveryTime":20,"maxDeliveryTime":20,"lastMileTravel":0.20000000298023224,"lastMileDistance":0,"serviceability":"SERVICEABLE","rainMode":"NONE","longDistance":"NOT_LONG_DISTANCE","preferentialService":false,"iconType":"EMPTY"},"promoted":false,"avgRating":"--","totalRatings":0,"new":false},"subtype":"basic"},{"type":"restaurant","data":{"type":"F","id":"628602","name":"TASTE OF SHAWARMA","uuid":"56e9d568-2736-4c67-a0a8-2af8aba32879","city":"45","area":"Civil Lines","totalRatingsString":"Too Few Ratings","cloudinaryImageId":"cghgf9ezjsybqip62i6x","cuisines":["Arabian","Snacks","Burgers"],"tags":[],"costForTwo":23000,"costForTwoString":"₹230 FOR TWO","deliveryTime":22,"minDeliveryTime":22,"maxDeliveryTime":22,"slaString":"22 MINS","lastMileTravel":1.2000000476837158,"slugs":{"restaurant":"taste-of-shawarma-civil-lines-civil-lines","city":"agra"},"cityState":"45","address":"H.NO.150 CIVIL LINE, CHURCH ROAD, WARD NO. 47 KHANDARI, Nagar Nigam  Food Safety Zone 08, Agra, Uttar Pradesh -  282002","locality":"Chruch Road","parentId":201699,"unserviceable":false,"veg":false,"select":false,"favorite":false,"tradeCampaignHeaders":[],"aggregatedDiscountInfo":{"header":"10% off","shortDescriptionList":[{"meta":"10% off | Use JUMBO","discountType":"Percentage","operationType":"RESTAURANT"}],"descriptionList":[{"meta":"10% off up to ₹100 on orders above ₹450 | Use code JUMBO","discountType":"Percentage","operationType":"RESTAURANT"}],"subHeader":"","headerType":0,"superFreedel":""},"aggregatedDiscountInfoV2":{"header":"10% OFF","shortDescriptionList":[{"meta":"Use JUMBO","discountType":"Percentage","operationType":"RESTAURANT"}],"descriptionList":[{"meta":"10% off up to ₹100 on orders above ₹450 | Use code JUMBO","discountType":"Percentage","operationType":"RESTAURANT"}],"subHeader":"","headerType":0,"superFreedel":""},"ribbon":[{"type":"PROMOTED"}],"chain":[],"feeDetails":{"fees":[{"name":"distance","fee":1900,"message":""},{"name":"time","fee":0,"message":""},{"name":"special","fee":0,"message":""}],"totalFees":1900,"message":"","title":"Delivery Charge","amount":"1900","icon":""},"availability":{"opened":true,"nextOpenMessage":"","nextCloseMessage":""},"longDistanceEnabled":0,"rainMode":"NONE","thirdPartyAddress":false,"thirdPartyVendor":"","adTrackingID":"cid=6112829~p=16~eid=00000186-f093-3148-11b4-138100ec103f","badges":{"imageBased":[],"textBased":[],"textExtendedBadges":[]},"lastMileTravelString":"1.2 kms","hasSurge":false,"sla":{"restaurantId":"628602","deliveryTime":22,"minDeliveryTime":22,"maxDeliveryTime":22,"lastMileTravel":1.2000000476837158,"lastMileDistance":0,"serviceability":"SERVICEABLE","rainMode":"NONE","longDistance":"NOT_LONG_DISTANCE","preferentialService":false,"iconType":"EMPTY"},"promoted":true,"avgRating":"--","totalRatings":0,"new":false},"subtype":"basic"},{"type":"restaurant","data":{"type":"F","id":"371093","name":"Achman Foods (Bhagwan Talkies)","uuid":"624ec150-51a8-4cef-8853-a507d112328d","city":"45","area":"Khandari","totalRatingsString":"1000+ ratings","cloudinaryImageId":"zpvs2j9bbtcc6mptcfl3","cuisines":["North Indian","South Indian"],"tags":[],"costForTwo":40000,"costForTwoString":"₹400 FOR TWO","deliveryTime":20,"minDeliveryTime":20,"maxDeliveryTime":20,"slaString":"20 MINS","lastMileTravel":1.600000023841858,"slugs":{"restaurant":"achman-foods-dayanand-nagar-dayanand-nagar","city":"agra"},"cityState":"45","address":"86 NH Bypass Road Near Bhagwan Talkies Chauraha Khandari Agra Uttar Pradesh 282005","locality":"New Agra Colony","parentId":26872,"unserviceable":false,"veg":false,"select":false,"favorite":false,"tradeCampaignHeaders":[],"chain":[],"feeDetails":{"fees":[{"name":"distance","fee":1900,"message":""},{"name":"time","fee":0,"message":""},{"name":"special","fee":0,"message":""}],"totalFees":1900,"message":"","title":"Delivery Charge","amount":"1900","icon":""},"availability":{"opened":true,"nextOpenMessage":"","nextCloseMessage":"Closes soon"},"longDistanceEnabled":0,"rainMode":"NONE","thirdPartyAddress":false,"thirdPartyVendor":"","adTrackingID":"","badges":{"imageBased":[],"textBased":[],"textExtendedBadges":[]},"lastMileTravelString":"1.6 kms","hasSurge":false,"sla":{"restaurantId":"371093","deliveryTime":20,"minDeliveryTime":20,"maxDeliveryTime":20,"lastMileTravel":1.600000023841858,"lastMileDistance":0,"serviceability":"SERVICEABLE","rainMode":"NONE","longDistance":"NOT_LONG_DISTANCE","preferentialService":false,"iconType":"EMPTY"},"promoted":false,"avgRating":"4.2","totalRatings":1000,"new":false},"subtype":"basic"
  }
]

//optional chaining == using "?" below 
const RestaurantCard = ({name,cuisines,cloudinaryImageId,lastMileTravelString,avgRating}) => { //functional component which retunrs some jsx ...{restaurant}--destructuring 
  //to make the code clean we can use this and make data inside our restaurant 
  return(
    <div className="card">
      <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"
        +cloudinaryImageId}  //cloudinary image id will be added in the end 
      />
        <h2>{name}</h2> 
        <h3>{cuisines.join(",")}</h3>
        <h3>{avgRating}</h3>
        <h4>{lastMileTravelString} minutes</h4>
    </div>
  )
}

//props-- properties == "restaurant = {restaurantList[0]}" here props is this - way of passing data in the component
//pass props or pass data means passing properties into my functional or class component 
//here restaurant is a prop and {restaurantList[] is data inside the component }

/*IMPORTANT NOTE - properties which i passed in the RestaurantCard as props are rendered in the Body when we passed the props as restaurant using restaurantList */


//no key <<<<< index key<< unique key (best practice)
const Body = () => {
  return (
    <div className="restaurant-list">
    {
      restaurantList.map(restaurant => { //using map to render the restuarants without typing again and again 
        return <RestaurantCard {...restaurant.data} key = {restaurant.data.id}
           //using spread operator to spread my objects 
           //we also need to give key for virtual DOM and reconciliation 
           //index is also a valid key but we should never use index as a key but when we dont have anything unique then we can use index as a key 
        />
      })
    }
    </div>
  )
}
const Footer = () => {
return (
  <h4>Footer</h4>
  )
}

//React.fragment 
//jsx can only have parent 
//for 2 parent we have div or we can use react.fragment 
const AppLayout = () => {  //applayout should have header,
  return (
    // header== logo,list items,cart
    // body == search bar and restaurant list(restaurant card - image name,rating,cuisines)
    // footer = links,copyright
    <div >
   <Header />
   <Body/>
   </div>
  )
}
const root  = ReactDOM.createRoot(document.getElementById("root"));  //to modify DOM....second library
//passing react element inside root ...will take element and modify the DOM

//async defer
// root.render(heading2) // to render the react element we use normal name 
root.render(<AppLayout />) //to render the functional component we use angular brackets  

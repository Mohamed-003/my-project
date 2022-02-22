

const sample = [ 
  {orderDate: '2022-01-06'} ,
  {orderDetails :{ productId : 'ad56', vendorId: '538hd'}},
  {userDetails : {  userId : 'ukaf86', address: '21/45, Angappan street, Chrompet, chennai-600023'}},
  {orderDate: '2022-08-06'} , 
  {orderDetails : {  productId: 'ad67' , vendorId: '538iuwa'  }},
  {userDetails: {  userId: 'ukjhs56',  address: '21/45, Nairvardha pillai street, Saidapet, chennai-600023'  }}
];
var user = sample[2].userDetails.userId;

function Bapp(){
  return(
    // <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="bg-white shadow overflow-hidden sm:rounded-lg">
      <div class="px-4 py-5 sm:px-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900">Previous Orders</h3>
      </div>
      <div class="border-t border-gray-200">
        <dl>
          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">{sample[2].userDetails.userId}</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">COD</dd>
            <dt class="text-sm font-medium text-gray-500">{sample[0].orderDate}</dt>
            <dt class="text-sm font-medium text-gray-500">1kg units</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{sample[2].userDetails.address}</dd>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{sample[1].orderDetails.productId}</dd>
          </div>
          <br></br>
          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">{sample[4].userDetails.userId}</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">COD</dd>
            <dt class="text-sm font-medium text-gray-500">{sample[3].orderDate}</dt>
            <dt class="text-sm font-medium text-gray-500">2kg units</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{sample[5].userDetails.address}</dd>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{sample[4].orderDetails.productId}</dd>
          </div>
        </dl>
      </div>
    </div>

  );
      
};

/********************************************************************************/ 

export default Bapp;

// export default App;

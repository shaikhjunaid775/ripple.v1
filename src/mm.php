<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <?php require_once ('head.php'); ?>

    <title>Dashboard</title>

    <!-- ✅ Load slick CSS ✅ -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.css"
        integrity="sha512-wR4oNhLBHf7smjy0K4oqzdWumd+r5/+6QO/vDda76MW5iug4PT7v86FoEkySIJft3XA0Ae6axhIvHrqwm793Nw=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />

    <!-- ✅ Load slick theme CSS ✅ -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
        integrity="sha512-17EgCFERpgZKcm0j0fEq1YCJuyAWdz9KUtv1EjVuaOz8pDnh/0nZxmU6BBXwaaxqoi9PQXnRWqlcDB027hgv9A=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
        
        
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/jquery-confirm@3.3.4/dist/jquery-confirm.min.css">


    <style>
        .slick-center {
            transform: scale(1.1, 1.1);
            border-radius: 10px;
            opacity: 1;
            transition: transform 1s cubic-bezier(0.165, 0.84, 0.44, 1);
            box-shadow: 0 20px 50px 5px rgba(0, 0, 0, 0.2);
        }

        .slick-initialized .slick-slide {
            display: flex !important;
        }

        .coin-box .blur {
            position: absolute;
            top: 19%;
            left: 17%;
            right: 0;
            bottom: 15px;
            width: 64%;
            border-radius: 75%;

        }

        .glassmorphy2 {
            background: rgba(0, 0, 0, 0.05);
            box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
            backdrop-filter: blur(4.5px);
            -webkit-backdrop-filter: blur(4.5px);
            /*border-radius: 10px;*/
            padding: 1px;
            border: 1px solid rgba(255, 255, 255, 0.18);
        }

        .tf-list-item {
            font-size: 12px;
        }
        
          .box-pad {
      padding: 2px 10px;
    }

    .text-xs1 {
      font-size: 10px;
    }

    
.refferal{
            padding: .235rem 0.235rem 0.235rem 0.35rem !important;
    font-size: 12px !important;
    line-height: 0 !important;
    gap: 2px !important;
    margin: 0 5px 0px 0 !important;
    color: #fff;
}
   .whatsapp-image{
          animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both infinite;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
      }
      @keyframes shake {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(1px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-2px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(3px, 0, 0);
  }
}
  .airdrop-animation{
        animation: mymove 0.5s infinite;
  }
  @keyframes mymove {
  50% {opacity: 0.3;}
}



 .modal {
	 position: absolute;
	     bottom: 40px;
	     top:auto;
	     left:auto;
	     right:0;
	 width: 75%;
	 font-size: 14px;
	 opacity: 0;
	 transform: translateY(-10%);
	 transition: opacity 0.5s, transform 0.5s;
	 pointer-events: none;
	 padding-bottom: 10px;
	 height: auto;
}
 .modal:hover {
	 opacity: 1;
	 pointer-events: all;
	 transform: translateY(0%);
}
 .modal.open {
	 opacity: 1;
	 display: block;
	 pointer-events: all;
	 transform: translateY(0%);
	 border-radius: 15px 15px 0 0;
    background: #044557;
}
 .modal > div:first-child {
	 position: relative;
	background: #044557;
    padding: 5px 10px;
    border-radius: 15px 15px 0 0;
	 display: flex;
	 align-items: center;
	 gap: 10px;
	     color: white;
}
 .modal > div:last-child {
	 padding: 10px;
	 background: #066a81;
	 border-radius: 15px 15px 0 0;
	 line-height: 1.5em;
	 color: #fff;
}
 .modal > div:last-child:after {
	 position: absolute;
	 bottom: 5px;
	     right: 15%;
	 transform: translate(-50%) rotate(45deg);
	 content: "";
	 width: 15px;
	 aspect-ratio: 1;
	 background: inherit;
}


/* nested div inside the container */
.marquee div {
    display: block;
    width: 200%;
    position: relative; 
    overflow: hidden;
    animation: marquee 12s linear infinite;
}

/* keyframe */
@keyframes marquee {
    0% { left: 0; }
    100% { left: -100%; }
}

.timer-container {
  text-align: center;
  padding: 40px;
  border-radius: 15px;
  backdrop-filter: blur(10px);
}

#timer {
  font-family: 'Orbitron', sans-serif;
  font-size: 64px;
  margin-bottom: 30px;
  letter-spacing: 3px;
  color: #00ffff;
  text-shadow: 0 4px 8px rgba(0, 255, 255, 0.7);
  animation: glow 1.5s ease-in-out infinite alternate;
}

@keyframes glow {
  from {
    text-shadow: 0 0 10px rgba(0, 255, 255, 0.7), 0 0 20px rgba(0, 255, 255, 0.5);
  }
  to {
    text-shadow: 0 0 20px rgba(0, 255, 255, 1), 0 0 30px rgba(0, 255, 255, 0.8);
  }
}

.coin-box {
    background-color: rgb(37 38 58);
    display: flex
;
    padding: 6px 8px 7px 8px;
    border-radius: 5px;
    position: relative;
    font-size: 11px;
    line-height: 13px;
    border: 1px solid #2fc6e8;
}




    </style>
</head>

<body
    style="background-image: url(<?php echo base_url() ?>assets/assets/images/background/b5.jpg); background-size: 100%;">

    <!-- preloade -->
     <?php require_once ('preloader.php'); ?>
    <!-- /preload -->

    <div class=" tf-container backdrop-blur-none glassmorphy2  border-none">
            <div class="box-account justify-between py-1.5 px-3">
                <img src="<?php echo base_url() ?>assets/assets/images/logo/logo-white1.png" alt="img" class="w-40">
                <a href="<?php echo base_url() ?>logout" data-logout
                   class="mt-2 d-flex justify-content-center align-items-center top-4 end-3 "  >
                    <div class="box-account">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff"
                            class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9" />
                        </svg>
                    </div>
                </a>

            </div>

    </div>
    <div class=" tf-container">
        <a href="#" class="mt-3 d-flex justify-content-between align-items-start">
            <div class="box-account">
              
                <div class="info">
                    <h6 class="my-1 text-lg">Hi, <?php echo ($user_data[0]['mobile_number']) ?> <?php echo ($user_data[0]['last_name']) ?></h6>
                    <p class="text-xs text-slate-100  my-1 mt-0">User ID: <?php echo ($user_data[0]['member_id']) ?></p>
                    <p class="text-lg text-slate-100 rounded-md  my-1 border px-1">My Rank: NA</p>
                    
                </div>
            </div>
            <span class="arr-right relative">
                 <?php if($user_data[0]['user_status'] == 'Active'){ ?>
                <span
                    class=" inline-flex items-center bg-transparent ring-2 ring-[#7eff00] text-[#7eff00] text-xs font-medium px-2.5 py-0.5 rounded-full ">
                    <span class="animate-pulse w-2 h-2 me-1 bg-[#7eff00] rounded-full"></span>
                    Active
                </span>
                  <?php   } else { ?>
                   <span
                    class=" inline-flex items-center bg-transparent ring-2 ring-[#EA4335] text-[#EA4335] text-xs font-medium px-2.5 py-0.5 rounded-full ">
                    <span class="animate-pulse w-2 h-2 me-1 bg-[#EA4335] rounded-full"></span>
                    Inactive
                </span>
                   <?php   }  ?>
            </span>
        </a>
        
             

    </div>

<?php if (empty($kyc)) 

{ ?>
        <div class="tf-container mt-2.5">
            <div class="tf-balance-box shadow-none mb-3 p-1 kyc-box text-[#CC0000] bg-[#7e0000] border-[#CC0000] rounded-full px-2">

                <div class="balance border-0 pb-0 ">

                    <div class="row">
                        <div class="col-6 br-right">
                            <div class="h-auto">
                                    
                                <h3 class=" blinking font-bold animate-pulse text-red-200 leading-6">KYC Pending</h3>
                            </div>
                        </div>
                        <div class="col-6">
                            
                            <div class="inner-right bg-white rounded-full h-100 flex justify-center items-center">

                               <a href="<?php echo base_url() ?>Main/kyc" class="text-sm tf-btn-danger text-black outline-secondary border-0 leading-6 font-semibold">Upload</a>
                             
                            </div>
                        </div>
                    </div>
                     
                </div>
                 
            </div>
        </div>
     <?php } else if($kyc['pan_card_status'] == "Pending"){  ?>
     
             <div class="tf-container mt-2.5">
            <div class="tf-balance-box shadow-none mb-3 p-1 kyc-box text-[#CC0000] bg-[#7e0000] border-[#CC0000] rounded-full px-2">
                <div class="balance border-0 pb-0 ">

                    <div class="row">
                        <div class="col-12 br-right">
                            <div class="h-auto px-2">
                                    
                                <h3 class=" blinking font-bold animate-pulse text-red-200 leading-6">KYC Pending</h3>
                            </div>
                        </div>
                       
                    </div>
                     
                </div>
                 
            </div>
        </div>
        
             <?php } else if($kyc['pan_card_status'] == "Reject"){  ?>
     <div class="tf-container mt-2.5">
            <div class="tf-balance-box shadow-none mb-3 p-1 kyc-box text-[#CC0000] bg-[#7e0000] border-[#CC0000] rounded-full px-2">

                <div class="balance border-0 pb-0 ">

                    <div class="row">
                        <div class="col-6 br-right">
                            <div class="h-auto">
                                    
                                <h3 class=" blinking font-bold animate-pulse text-red-200 leading-6">KYC Pending</h3>
                            </div>
                        </div>
                        <div class="col-6">
                            
                            <div class="inner-right bg-white rounded-full h-100 flex justify-center items-center">

                               <a href="<?php echo base_url() ?>Main/kyc" class="text-sm tf-btn-danger text-black outline-secondary border-0 leading-6 font-semibold">Upload</a>
                             
                            </div>
                        </div>
                    </div>
                     
                </div>
                 
            </div>
        </div>
        <?php } ?>
        <br>
                    <div class="tf-balance-box shadow-none mb-3 p-1 kyc-box text-[#CC0000] bg-[#7e0000] border-[#CC0000] mt-3">

               <div class="balance border-0 pb-0 ">
    <div class="row">
        <div class="col-12 br-right">
            <div class="h-auto">
                <marquee behavior="scroll" direction="left" scrollamount="5">
                    <h3 class="font-bold text-red-200  fs-16 leading-6">
                        Clear the cache to ensure the latest updates.
                    </h3>
                </marquee>
            </div>
        </div>
    </div>
</div>

            </div>
    </div>

        <div class=" tf-container mt-3">
            <div class="pt-4  mt-4 bg-[url('<?php echo base_url() ?>assets/assets/images/background/wallet.jpg')] bg-cover bg-center p-3 rounded-2xl" >
                <div class="d-flex justify-between">
                    <div>
                <h5><span class="text-primary title-head text-md">Bot Balance</span> </h5>
                
              <?php
date_default_timezone_set('Your/Timezone'); // Set your timezone
$currentHour = date('H');
$currentMinute = date('i');
$currentDay = date('N'); // Get the current day of the week (1 for Monday, 7 for Sunday)
$total =  $user_data[0]['activated_package'];

// Check if the current time is between 9:30 AM (9:30) and 3:30 PM (15:30)
// Exclude weekends (Saturday and Sunday)
if (($currentDay >= 1 && $currentDay <= 5) && // Weekdays only (Monday to Friday)
    (($currentHour > 9 || ($currentHour == 9 && $currentMinute >= 30)) && 
    ($currentHour < 15 || ($currentHour == 15 && $currentMinute <= 30)))) {
    $displayValue = 0;
} else {
    $displayValue = $total;
}
?>


<h1 class="my-2 lh-1 font-primary text-3xl font-bold">
    <a href="#"> <?php echo $displayValue; ?> </a>
</h1>

                        
                    </div>
            
                </div>
                
                
            </div>
        </div>

        <div class=" tf-container">
            <div class="">
               

                <div class="mb-2">
                    
                    <div class="flex gap-3 items-center justify-center relative">
                    


                    </div>
                  
                    <div class="my-3 ">
                        <div class=" w-full bg-gradient-to-t from-[#094593] to-[#010624]  p-3 rounded-2xl">
                            <!-- TradingView Widget BEGIN -->
                            <div class="tradingview-widget-container">
                              <div class="tradingview-widget-container__widget"></div>
                              <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js" async>
                              {
                              "symbols": [
                                {
                                  "proName": "FOREXCOM:SPXUSD",
                                  "title": "S&P 500 Index"
                                },
                                {
                                  "proName": "FOREXCOM:NSXUSD",
                                  "title": "US 100 Cash CFD"
                                },
                                {
                                  "proName": "FX_IDC:EURUSD",
                                  "title": "EUR to USD"
                                },
                                {
                                  "proName": "BITSTAMP:BTCUSD",
                                  "title": "Bitcoin"
                                },
                                {
                                  "proName": "BITSTAMP:ETHUSD",
                                  "title": "Ethereum"
                                }
                              ],
                              "showSymbolLogo": true,
                              "isTransparent": true,
                              "displayMode": "regular",
                              "colorTheme": "dark",
                              "locale": "en"
                            }
                              </script>
                            </div>
                            <!-- TradingView Widget END -->
                            <div class="text-center mb-3 flex justify-center items-center gap-6">
   <div class="relative inline-flex">
    <div class="w-3 h-3 bg-green-500 rounded-full" id="statusDot"></div>
    <div class="w-3 h-3 bg-green-500 rounded-full absolute top-0 left-0 animate-ping" id="pingDot"></div>
    <div class="w-3 h-3 bg-green-500 rounded-full absolute top-0 left-0 animate-pulse" id="pulseDot"></div>
</div>
<span class="text-white text-3xl font-bold"><span id="liveStatus" class="airdrop-animation"></span> MM Bot</span>
                            </div>
                            <div class="timer-container">
                             <h1 id="timer">00:00:00</h1>
<div id="timerLabels" class="timer-labels flex justify-around gap-2">
    <span id="hours-label" class="text-large opacity-80 text-white">Hours</span>
    <span id="minutes-label" class="text-large opacity-80 text-white">Minutes</span>
    <span id="seconds-label" class="text-large opacity-80 text-white">Seconds</span>
</div>
                            </div>
                           
                            <div>
                                <h3 class="text-md mb-4 flex items-center justify-between gap-6">
                                    <div class="flex items-center ">
                                                            <div class="px-2 py-1 rounded-md bg-gray-700 font-medium flex items-center gap-2 text-uppercase">
   <div>
    <span class="flex w-2.5 h-2.5 me-1 bg-green-500 rounded-full animate-pulse" id="statusIndicator"></span>
</div>

<span id="liveStatusStyled" class="text-green-500 leading-none text-xs"></span>

</div>


                                                        </div>
                                                        <div>
                                                            
                                                        <span id="liveTime" ></span><span id="currentDate"></span>
                                                        </div>
                                </h3>
<?php
// Get the current day of the week and current time
$current_day = date('w'); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
$current_time = date('H:i');
$start_time = '09:30';
$end_time = '15:30';

// Check if it's a weekend (Saturday or Sunday) or outside the specified time range
if (($current_day == 0 || $current_day == 6) || $current_time < $start_time || $current_time > $end_time): ?>
    <div class="flex flex-col justify-between gap-1 my-3 mb-2">
        <div class="flex justify-between gap-1">
            <span class="text-2xl text-white font-bold">
              0
            </span>
            <span class="text-lg text-green-500 font-bold flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                  <path fill-rule="evenodd" d="M15.22 6.268a.75.75 0 0 1 .968-.431l5.942 2.28a.75.75 0 0 1 .431.97l-2.28 5.94a.75.75 0 1 1-1.4-.537l1.63-4.251-1.086.484a11.2 11.2 0 0 0-5.45 5.173.75.75 0 0 1-1.199.19L9 12.312l-6.22 6.22a.75.75 0 0 1-1.06-1.061l6.75-6.75a.75.75 0 0 1 1.06 0l3.606 3.606a12.695 12.695 0 0 1 5.68-4.974l1.086-.483-4.251-1.632a.75.75 0 0 1-.432-.97Z" clip-rule="evenodd" />
                </svg>
                <span id="total-amount">
                   0 
                </span><small>(+0.50%)</small>
            </span>
        </div>
        <div class="flex justify-between text-right ">
            <span class="text-md text-white">
                Opening Balance
            </span>
            <span class="text-md text-white">
                Movement
            </span>
        </div>
    </div>
<?php else: ?>

    <div class="flex flex-col justify-between gap-1 my-3 mb-2">
        <div class="flex justify-between gap-1">
            <span class="text-2xl text-white font-bold">
                <?php echo $user_data[0]['activated_package'] ?>
            </span>
            <span class="text-lg text-green-500 font-bold flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                  <path fill-rule="evenodd" d="M15.22 6.268a.75.75 0 0 1 .968-.431l5.942 2.28a.75.75 0 0 1 .431.97l-2.28 5.94a.75.75 0 1 1-1.4-.537l1.63-4.251-1.086.484a11.2 11.2 0 0 0-5.45 5.173.75.75 0 0 1-1.199.19L9 12.312l-6.22 6.22a.75.75 0 0 1-1.06-1.061l6.75-6.75a.75.75 0 0 1 1.06 0l3.606 3.606a12.695 12.695 0 0 1 5.68-4.974l1.086-.483-4.251-1.632a.75.75 0 0 1-.432-.97Z" clip-rule="evenodd" />
                </svg>
            
                <span >
                        <?php echo $today_profit ?>
                </span>
                <small>(+0.50%)</small>
            </span>
        </div>
        <div class="flex justify-between text-right ">
            <span class="text-md text-white">
                Opening Balance
            </span>
            <span class="text-md text-white">
                Movement
            </span>
        </div>
    </div>
<?php endif; ?>


                            </div>
<?php
// Time slots with start times
$time_slots = [
    ['time_range' => '09:30 - 10:30', 'start_time' => '10:30'],
    ['time_range' => '10:31 - 11:30', 'start_time' => '11:30'],
    ['time_range' => '11:31 - 12:30', 'start_time' => '12:30'],
    ['time_range' => '12:31 - 13:30', 'start_time' => '13:30'],
    ['time_range' => '13:31 - 14:30', 'start_time' => '14:30'],
    ['time_range' => '14:31 - 15:30', 'start_time' => '15:30']
];

// Sample daily profits (this is already coming from your database)

?>
  <?php 
    // Get the current day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    $current_day = date('w');

    // Check if today is Saturday or Sunday
    $is_market_closed = ($current_day == 0 || $current_day == 6);
    ?>
    <?php if ($is_market_closed): ?>
    
      <?php else: ?>
<div>
    <?php foreach (array_chunk($time_slots, 3) as $slot_chunk): ?>
        <div class="flex justify-between divide-x divide-gray-500 bg-gray-800 p-3 px-2 rounded-lg mt-4">
            <?php foreach ($slot_chunk as $index => $slot): ?>
                <?php
                // Default values
                $time_slot_profit = '0.0000'; // Default profit if no match is found
                $profit_color = 'text-green-500'; // Default color (green)

                // Remove " AM" or " PM" for comparison
                $formatted_time_slot = trim(str_replace([' AM', ' PM'], '', $slot['start_time']));

                // Check if this time slot is in the past or current time
                if ($formatted_time_slot <= $current_time) {
                    // Check if this time slot exists in daily profits
                    $is_matched = false;
                    foreach ($daily_profits as $daily) {
                        $daily_time_slot = trim(str_replace([' AM', ' PM'], '', $daily['time_slot']));
                        if ($daily_time_slot == $formatted_time_slot) {
                            $time_slot_profit = number_format($daily['profit_amount'], 4); // Use actual profit
                            $is_matched = true;
                            break;
                        }
                    }

                    // Highlight missed slots in red if no profit data is found
                    if (!$is_matched) {
                        $time_slot_profit = 'Missed'; 
                        $profit_color = 'text-red-500'; // Red color for missed slots
                    }
                }
                ?>
                <div class="flex flex-col" data-start-time="<?= $slot['start_time'] ?>">
                    <span class="amount <?= $profit_color ?> text-lg font-semibold">
                        
                        <?= $time_slot_profit ?>
                    </span>
                    <span class="text-xs text-gray-400"><?= $slot['time_range'] ?></span>
                </div>
                <?php if ($index < count($slot_chunk) - 1): ?>
                    <vr></vr>
                <?php endif; ?>
            <?php endforeach; ?>
        </div>
    <?php endforeach; ?>
</div>
    <div class="flex justify-between divide-x divide-gray-500 mt-6">
        <div class="flex flex-col ">
            <span class="text-green-500 text-lg font-semibold">0.50%</span>
            <span class="text-sm text-gray-400">Today Profit (%)</span>
        </div>
        <vr></vr>
        <div class="flex flex-col ">
            <span class="text-green-500 text-lg font-semibold"  ><?php echo $today_profit ?></span>
            <span class="text-sm text-gray-400">Today Profit</span>
        </div>
    </div>
     <?php endif; ?>




                        </div>
                    </div>
                </div>
                
               
                <div class="">
                    <h5 class="text-center "><span class="text-white title-head  text-3xl font-bold mb-2">My Portfolio</span> </h5>
                    

                    <div class="grid grid-1 gap-3 pt-3 ">
                        
                        
                         <?php 
    $sr = 0;
    $totalprofitdailyAmount = 0;
    foreach($daily_profits_new as $daily) {
        $sr++;
        $totalprofitdailyAmount += $daily['amount'];
    }
    ?>
                                              <div class="">
                            <a href="<?php echo base_url() ?>Main/depositLedger" class="coin-box flex flex-col gap-3">
                                   <div class="coin-price d-flex justify-content-between">
                                    <span class="fs-16 text-white"> Principal Balance</span>
                                </div>
                                <div class="coin-logo justify-between">
                                    <div class="title">
                                        
                                        <span class="fs-16  text-white font-bold">
                                             <?php echo isset($deposit_total[0]['tamount']) && $deposit_total[0]['tamount'] !== '' ? $deposit_total[0]['tamount'] : 0; ?>

                                            </span>
                                    </div>
                                    <div>
                                    <img src="<?php echo base_url() ?>assets/assets/images/svg/dashboard/money_5174360 1.png" class="w-6">
                                    </div>
                                </div>

                             
                                <div class="blur bg3">
                                </div>
                            </a>
                        </div>
                                   <div class="">
                            <a href="<?php echo base_url() ?>Main/profitLedger" class="coin-box flex flex-col gap-3">
                                    <div class="coin-price d-flex justify-content-between">
                                    <span class="fs-16 text-white"> Profit + Compounding</span>
                                </div>
                                <div class="coin-logo justify-between">
                                    <div class="title">
                                        <span class="fs-16 text-white font-bold">
                                       
                                            <?php echo $e_wallettotalprofit[0]['amount'] ?>

                                            </span>
                                    </div>
                                    <div>
                                    <img src="<?php echo base_url() ?>assets/assets/images/svg/dashboard/wallet_3228313.png" class="w-6">
                                    </div>
                                </div>

                            
                                <div class="blur bg3">
                                </div>
                            </a>
                        </div>
<?php 
    $sr = 0;
    $totallevelAmount = 0;
    $totalgoldAmount = 0;
    
    // Loop through Level_income
    foreach($Level_income as $slevel) {
        $sr++;
        $totallevelAmount += $slevel['amount'];
    }

    // Loop through e_wallet_gold
    foreach($e_wallet_gold as $glevel) {
        $sr++;
        $totalgoldAmount += $glevel['amount'];
    }

    // Calculate total earning
    $totalearning = $totallevelAmount + $totalgoldAmount;
?>

                         <div class="">
                            <a href="#" class="coin-box flex flex-col gap-3">
                                
                                <div class="coin-logo justify-between">
                                    <div class="title">
                                        <span class="fs-16 text-white font-bold">Working Wallet</span>
                                    </div>
                                  

                                </div>
                                    <div class="title">
                                        <span class="fs-16 text-white font-bold">  <?php echo isset($totalearning) && $totalearning ? $totalearning : 0; ?></span>
                                    </div>
                                    <hr>
                                          <div class="coin-logo justify-between">
                                    <div class="title">
                                        <span class="fs-16 text-white font-bold">Silver Level Bonus</span>
                                    </div>
                                  

                                </div>
                                    <div class="title">
                                         <?php if ($user_data[0]['user_status'] === "Active"){?>
                                        <span class="fs-16 text-white font-bold"><?php echo isset($totallevelAmount) && $totallevelAmount ? $totallevelAmount : 0; ?>
</span>
                                         <?php }else {?>
                                          <span class="fs-16 text-white font-bold"><?php echo isset($totallevelAmount) && $totallevelAmount ? $totallevelAmount : 0; ?>
</span>
                                           <?php }?>
                                    </div>
                                    <hr>
  <div class="coin-logo justify-between">
                                    <div class="title">
                                        <span class="fs-16 text-white font-bold"> Gold Level Bouns</span>
                                    </div>
                                  

                                </div>
                                    <div class="title">
                                         <?php if ($user_data[0]['user_status'] === "Active"){?>
                                        <span class="fs-16 text-white font-bold"><?php echo isset($totalgoldAmount) && $totalgoldAmount ? $totalgoldAmount : 0; ?>
</h1>
                                         <?php }else {?>
                                          <span class="fs-16 text-white font-bold"><?php echo isset($totalgoldAmount) && $totalgoldAmount ? $totalgoldAmount: 0; ?>
</h1>
                                           <?php }?>
                                    </div>
                                    <hr>
                                      <div class="coin-logo justify-between">
                                    <div class="title">
                                        <span class="fs-16 text-white font-bold">Reward Bonus</span>
                                    </div>
                                  

                                </div>
                                    <div class="title">
                                        <span class="fs-16 text-white font-bold">0</span>
                                    </div>
                                    
                                <div class="blur bg1">
                                </div>
                            </a>
                            
                            
                        </div>

    
 <div class="">
                            <a href="<?php echo base_url() ?>Main/withdraw" class="coin-box flex flex-col gap-3">
                                
                                <div class="coin-logo justify-between">
                                    <div class="title">
                                        <span class="fs-16 text-white font-bold">Total Withdrawal</span>
                                    </div>
                                  

                                </div>
                                    <div class="title">
                                        <?php $totalwithdraw = $withdrawal_amount_working[0]['withdraw_amount'] + $withdrawal_amount_deposit[0]['withdraw_amount']?>
                                        <span class="fs-16 text-white font-bold">  <?php echo isset($totalwithdraw) && $totalwithdraw ? $totalwithdraw : 0; ?></span>
                                    </div>
                                    <hr>
                                          <div class="coin-logo justify-between">
                                    <div class="title">
                                        <span class="fs-16 text-white font-bold">Working Withdrawal </span>
                                    </div>
                                  

                                </div>
                                    <div class="title">
                                        <span class="fs-16 text-white font-bold"><?php echo isset($withdrawal_amount_working[0]['withdraw_amount']) && $withdrawal_amount_working[0]['withdraw_amount'] !== '' ? $withdrawal_amount_working[0]['withdraw_amount'] : 0; ?></span>
                                    </div>
                                    <hr>
  <div class="coin-logo justify-between">
                                    <div class="title">
                                        <span class="fs-16 text-white font-bold"> Profit Withdrawal</span>
                                    </div>
                                  

                                </div>
                                    <div class="title">
                                        <span class="fs-16 text-white font-bold"> 0</span>
                                    </div>
                                    <hr>
                                      <div class="coin-logo justify-between">
                                    <div class="title">
                                        <span class="fs-16 text-white font-bold">Principal Withdrawal</span>
                                    </div>
                                  

                                </div>
                              
                                    <div class="title">
                                        <span class="fs-16 text-white font-bold"><?php echo isset($withdrawal_amount_deposit[0]['withdraw_amount']) && $withdrawal_amount_deposit[0]['withdraw_amount'] !== '' ? $withdrawal_amount_deposit[0]['withdraw_amount'] : 0; ?></span>
                                    </div>
                                    
                                <div class="blur bg1">
                                </div>
                            </a>
                            
                            
                        </div>
                        </div>
   <div class="grid grid-2 gap-3 pt-3 pb-20">
                        
     <?php
$totalActivatedPackage = 0;
$activeCount = 0;
$inactiveCount = 0;

foreach ($direct_data as $row) {
    // Update the total activated package
    $totalActivatedPackage += $row->activated_package;
    
    // Count active and inactive users
    if ($row->user_status == 'Active') {
        $activeCount++;
    } else {
        $inactiveCount++;
    }
}
?>
                        <div class="">
                            <a href="<?php echo base_url() ?>Main/directsummary" class="coin-box flex flex-col gap-3">
                                <div class="coin-logo justify-between">
                                    <div class="title">
                                          <?php if ($user_data[0]['user_status'] === "Active"){?>
                                        <span class="fs-16 text-white font-bold"><?php echo  $activeCount; ?></h1>
                                         <?php }else {?>
                                          <span class="fs-16 text-white font-bold">0</h1>
                                           <?php }?>
                                    </div>
                                    <div>
                                    <img src="<?php echo base_url() ?>assets/assets/images/svg/dashboard/user_2612881.png" class="w-6">
                                    </div>
                                    

                                </div>

                                <div class="coin-price d-flex justify-content-between">
                                    <span class="text-white">Total Direct's</span>
                                </div>
                                <div class="blur bg2">
                                </div>

                            </a>
                        </div>
      <?php
        $sr = 0;
        $member_id_array = [];
        $totalActiveMembers = 0;
        $totalInactiveMembers = 0;
        $totalTeamCount = 0;

        foreach ($levels as $levelNumber => $levelData) {
            $memberIds = array_keys($levelData);
            $member_id_array[$levelNumber] = $memberIds;
        }

        foreach ($member_id_array as $key => $value) {
            $memberIds = $member_id_array[$key];

            foreach ($memberIds as $index => $memberId) {
                $sr++;
                $query = $this->db
                    ->from('users')
                    ->where('member_id', $memberId)
                    ->get();

                $result = $query->result_array();
                $data = $result;

                $totalTeamCount++;

                if ($data[0]['user_status'] == "Active") {
                    $totalActiveMembers++;
                } else {
                    $totalInactiveMembers++;
                }
                
            }
            
        }
    ?>
                        <div class="">
                            <a href="<?php echo base_url() ?>Main/referalLedger" class="coin-box flex flex-col gap-3">
                                <div class="coin-logo justify-between">
                                    <div class="title">
                                            <?php if ($user_data[0]['user_status'] === "Active"){?>
                                        <span class="fs-16 text-white font-bold"><?php echo $totalTeamCount; ?></h1>
                                         <?php }else {?>
                                          <span class="fs-16 text-white font-bold">0</h1>
                                           <?php }?>
                                       
                                         
                                    </div>
                                    <div>
                                    <img src="<?php echo base_url() ?>assets/assets/images/svg/dashboard/audience_3404724.png" class="w-6">
                                    </div>
                                </div>

                                <div class="coin-price d-flex justify-content-between">
                                    <span class="text-white">Total Team</span>
                                </div>
                                <div class="blur bg2">
                                </div>

                            </a>
                        </div>
                        <div class="">
                            <a href="#" class="coin-box flex flex-col gap-3">
                                <div class="coin-logo justify-between">
                                    <div class="title">
                                            <?php if ($user_data[0]['user_status'] === "Active"){?>
                                        <span class="fs-16 text-white font-bold">0</h1>
                                         <?php }else {?>
                                          <span class="fs-16 text-white font-bold">0</h1>
                                           <?php }?>
                                       
                                         
                                    </div>
                                    <div>
                                    <img src="<?php echo base_url() ?>assets/assets/images/svg/dashboard/audience_3404724.png" class="w-6">
                                    </div>
                                </div>

                                <div class="coin-price d-flex justify-content-between">
                                    <span class="text-white">Rewards</span>
                                </div>
                                <div class="blur bg2">
                                </div>

                            </a>
                        </div>
                        <div class="">
                            <a href="#" class="coin-box flex flex-col gap-3">
                                <div class="coin-logo justify-between">
                                    <div class="title">
                                        
                                                <?php
        $sr = 0;
        $member_id_array = [];
        $totalActiveMembers = 0;
        $totalInactiveMembers = 0;
        $totalTeamCount = 0;

        foreach ($levels as $levelNumber => $levelData) {
            $memberIds = array_keys($levelData);
            $member_id_array[$levelNumber] = $memberIds;
        }

        foreach ($member_id_array as $key => $value) {
            $memberIds = $member_id_array[$key];

            foreach ($memberIds as $index => $memberId) {
                $sr++;
                $query = $this->db
                    ->from('users')
                    ->where('member_id', $memberId)
                    ->get();

                $result = $query->result_array();
                $data = $result;

                $totalTeamCount++;

                if ($data[0]['user_status'] == "Active") {
                    $totalActiveMembers++;
                } else {
                    $totalInactiveMembers++;
                }
                
                 // Sum up deposit amounts
            $totalDepositAmount += (float)$data[0]['deposit_amount']; // Ensure it's treated as a float
                
            }
            
        }
    ?>
                                            <?php if ($user_data[0]['user_status'] === "Active"){?>
                                        <span class="fs-16 text-white font-bold"><?php echo $totalDepositAmount?></h1>
                                         <?php }else {?>
                                          <span class="fs-16 text-white font-bold">0</h1>
                                           <?php }?>
                                       
                                         
                                    </div>
                                    <div>
                                    <img src="<?php echo base_url() ?>assets/assets/images/svg/dashboard/audience_3404724.png" class="w-6">
                                    </div>
                                </div>

                                <div class="coin-price d-flex justify-content-between">
                                    <span class="text-white">Total Business</span>
                                </div>
                                <div class="blur bg2">
                                </div>

                            </a>
                        </div>
                    </div>
                </div>
<div class=" tf-container p-0 d-none">
            <div class=" mt-4 pb-20">
                <div class="wrap-filter-swiper p-1 my-2 ">
                    <h5><span class="text-white title-head text-md mb-2">Today's Profit Earning</span> </h5>
                </div>

                <div class="mb-2 single-item">
                    <!-- Iterate through the names and create the HTML structure -->
                    <?php
                    $names = array(
                        "Amit Sharma",
                        "Ravi Kumar",
                        "Suresh Gupta",
                        "Sunil Yadav",
                        "Anil Verma",
                        "Rajesh Singh",
                        "Deepak Pandey",
                        "Pankaj Tiwari",
                        "Manoj Chauhan",
                        "Vijay Joshi",
                        "Arun Thakur",
                        "Sanjay Mishra",
                        "Pradeep Shukla",
                        "Ramesh Agarwal",
                        "Naveen Mehta",
                        "Ashok Patel",
                        "Ganesh Nair",
                        "Harish Kulkarni",
                        "Mukesh Rao",
                        "Satish Bhatt",
                        "Sudhir Choudhary",
                        "Naresh Sinha",
                        "Mahesh Dubey",
                        "Raghav Arora",
                        "Ajay Deshmukh",
                        "Anita Singh",
                        "Poonam Gupta",
                        "Meena Yadav",
                        "Seema Verma",
                        "Sunita Sharma",
                        "Kiran Joshi",
                        "Rekha Pandey",
                        "Nisha Tiwari",
                        "Renu Chauhan",
                        "Jyoti Mishra",
                        "Radha Thakur",
                        "Geeta Agarwal",
                        "Neha Mehta",
                        "Archana Patel",
                        "Lata Nair",
                        "Sarita Kulkarni",
                        "Savita Rao",
                        "Priya Bhatt",
                        "Preeti Choudhary",
                        "Anjali Sinha",
                        "Shweta Dubey",
                        "Kavita Arora",
                        "Manisha Deshmukh",
                        "Raj Kumar",
                        "Vinod Gupta",
                        "Dinesh Sharma",
                        "Kamlesh Yadav",
                        "Bharat Verma",
                        "Om Prakash",
                        "Nirmala Devi",
                        "Shobha Singh",
                        "Pushpa Mishra",
                        "Alka Patel",
                        "Madhu Choudhary",
                        "Pankaj Pawar"
                    );

                    // Create an array to store used random numbers
                    $used_numbers = array();

                    foreach ($names as $name) {
                        // Generate a unique random number for each member
                        do {
                            $random_number = rand(10, 700);
                        } while (in_array($random_number, $used_numbers)); // Check if the number has already been used
                    
                        // Add the generated number to the used numbers array
                        $used_numbers[] = $random_number;


                        echo '<div class="mx-4 my-1 rounded-3 p-2 bg-surface coin-item align-items-center style-2 gap-12">';
                        echo '<img src="' . base_url() . 'assets/assets/images/logo/preloader.png" alt="img" class="rounded-circle img">';
                        echo '<div class="content">';
                        echo '<div class="title">';
                        echo '<p class="text-button">' . $name . '</p>';
                        echo '</div>';
                        echo '<div>';
                        echo '<span class="winner-badge">' . $random_number . '</span>';
                        echo '</div>';
                        echo '</div>';
                        echo '</div>';
                    }
                    ?>

                </div>
            </div>
        </div>
            </div>
        </div>

        

    </div>

    <?php require_once ('footer.php'); ?>

    <!-- account -->
    <div class="modal fade action-sheet" id="accountWallet">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <span>Wallet</span>
                    <span class="icon-cancel" data-bs-dismiss="modal"></span>
                </div>
                <ul class="mt-20 pb-16">
                    <li data-bs-dismiss="modal">
                        <div
                            class="d-flex justify-content-between align-items-center gap-8 text-large item-check active dom-value">
                            Account 1 <i class="icon icon-check-circle"></i> </div>
                    </li>
                    <li class="mt-4" data-bs-dismiss="modal">
                        <div class="d-flex  justify-content-between gap-8 text-large item-check dom-value">Account 2<i
                                class="icon icon-check-circle"></i></div>
                    </li>
                </ul>
            </div>

        </div>
    </div>

    <!-- notification -->
    <div class="modal fade modalRight" id="notification">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="header fixed-top bg-surface d-flex justify-content-center align-items-center">
                    <span class="left" data-bs-dismiss="modal" aria-hidden="true"><i class="icon-left-btn"></i></span>
                    <h3>Notification</h3>
                </div>
                <div class="overflow-auto pt-45 pb-16">
                    <div class="tf-container">
                        <ul class="mt-12">
                            <li>
                                <a href="#" class="noti-item bg-menuDark">
                                    <div class="pb-8 line-bt d-flex">
                                        <p class="text-button fw-6">Cointex to just tick size and trading amount
                                            precision of spots/margins and perpetual swaps</p>
                                        <i class="dot-lg bg-primary"></i>
                                    </div>
                                    <span class="d-block mt-8">5 minutes ago</span>
                                </a>
                            </li>
                            <li class="mt-12">
                                <a href="#" class="noti-item bg-menuDark">
                                    <div class="pb-8 line-bt d-flex">
                                        <p class="text-button fw-6">Cointex to adjust components of several indexes</p>
                                        <i class="dot-lg bg-primary"></i>
                                    </div>
                                    <span class="d-block mt-8">5 minutes ago</span>
                                </a>
                            </li>
                            <li class="mt-12">
                                <a href="#" class="noti-item bg-menuDark">
                                    <div class="pb-8 line-bt d-flex">
                                        <p class="text-button fw-6">Cointex to just tick size and trading amount
                                            precision of spots/margins and perpetual swaps</p>
                                        <i class="dot-lg bg-primary"></i>
                                    </div>
                                    <span class="d-block mt-8">5 minutes ago</span>
                                </a>
                            </li>
                            <li class="mt-12">
                                <a href="#" class="noti-item bg-menuDark">
                                    <div class="pb-8 line-bt">
                                        <p class="text-button fw-6 text-secondary">Cointex to adjust components of
                                            several indexes</p>
                                    </div>
                                    <span class="d-block mt-8 text-secondary">1 day ago</span>
                                </a>
                            </li>
                            <li class="mt-12">
                                <a href="#" class="noti-item bg-menuDark">
                                    <div class="pb-8 line-bt">
                                        <p class="text-button fw-6 text-secondary">Cryptex wallet uses Achain network
                                            service</p>
                                    </div>
                                    <span class="d-block mt-8 text-secondary">1 day ago</span>
                                </a>
                            </li>
                            <li class="mt-12">
                                <a href="#" class="noti-item bg-menuDark">
                                    <div class="pb-8 line-bt">
                                        <p class="text-button fw-6 text-secondary">Cointex to adjust components of
                                            several indexes</p>
                                    </div>
                                    <span class="d-block mt-8 text-secondary">1 day ago</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </div>



    <!-- Modal -->


    <?php require_once ('foot.php'); ?>
   <!-- Modal -->
<div class="modal fade" id="onload" tabindex="-1" aria-labelledby="onloadLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header absolute border-0 right-3 top-3 p-2 z-10">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><svg class=" " data-bs-dismiss="modal" aria-label="Close" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" class="size-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg></button>
            </div>
            <div class="modal-body p-0">
                <img src="<?php echo base_url() ?>assets/dubaipopup.jpeg" alt="Dubai popup" class="img-fluid">
            </div>
        </div>
    </div>
</div>


<!--<canvas id="confetti-canvas" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 1067;"></canvas>-->

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js"></script>
<script type="text/javascript">
    window.onload = () => {
        // Show the modal
        const myModal = new bootstrap.Modal(document.getElementById('onload'));
        myModal.show();

        // Confetti canvas setup
        // const confettiCanvas = document.getElementById('confetti-canvas');
        // const confettiInstance = confetti.create(confettiCanvas, { resize: true });

        // Trigger confetti when modal shows
        setTimeout(() => {
            const duration = 5 * 1000; // Confetti duration: 5 seconds
            const end = Date.now() + duration;

            const confettiColors = ["#bb0000", "#ffffff", "#FFD700", "#00FF00", "#1E90FF"];

            (function frame() {
                confettiInstance({
                    particleCount: 5,
                    angle: 60,
                    spread: 55,
                    origin: { x: 0 },
                    colors: confettiColors
                });
                confettiInstance({
                    particleCount: 5,
                    angle: 120,
                    spread: 55,
                    origin: { x: 1 },
                    colors: confettiColors
                });

                if (Date.now() < end) {
                    requestAnimationFrame(frame);
                }
            })();
        }, 300); // Delay to synchronize with modal display
    };
</script>


<script>
// Define market open and close hours (09:30 to 15:30)
var marketOpenHour = 9;  // 9:30 AM
var marketOpenMinute = 30;  // 30 minutes
var marketCloseHour = 15;  // 3:30 PM
var marketCloseMinute = 30;  // 30 minutes

// Function to get the current time in Indian Standard Time (IST)
function getISTTime() {
    return new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
}

// Function to check if the market is open
function isMarketOpen() {
    var istNow = getISTTime();

    // Check if it's a weekend (Saturday or Sunday)
    var dayOfWeek = istNow.getDay(); // 0 = Sunday, 6 = Saturday
    if (dayOfWeek === 0 || dayOfWeek == 6) {
        return false; // Market is closed on weekends
    }

    // Get current time in hours and minutes
    var currentHour = istNow.getHours();
    var currentMinute = istNow.getMinutes();

    // Check if current time is within market open and close times
    if (currentHour > marketOpenHour && currentHour < marketCloseHour) {
        return true;  // Between 09:30 and 15:30
    } else if (currentHour === marketOpenHour && currentMinute >= marketOpenMinute) {
        return true;  // After 09:30
    } else if (currentHour === marketCloseHour && currentMinute <= marketCloseMinute) {
        return true;  // Before 15:30
    } else {
        return false;  // Outside market hours
    }
}

// Update market status every second
setInterval(function() {
    var liveStatus = document.getElementById("liveStatus");
    var liveStatusStyled = document.getElementById("liveStatusStyled");
    var statusDot = document.getElementById("statusDot");
    var pingDot = document.getElementById("pingDot");
    var pulseDot = document.getElementById("pulseDot");
    var statusIndicator = document.getElementById("statusIndicator");

    // Check if market is open or closed
    if (isMarketOpen()) {
        // If within market hours, show "Live"
        liveStatus.innerText = "Live";
        liveStatusStyled.innerText = "Live";
        
        // Apply green styling to the status and dots
        liveStatusStyled.classList.remove("text-red-500");
        liveStatusStyled.classList.add("text-green-500");

        statusDot.classList.remove("bg-red-500");
        statusDot.classList.add("bg-green-500");
        
        pingDot.classList.remove("bg-red-500");
        pingDot.classList.add("bg-green-500");
        
        pulseDot.classList.remove("bg-red-500");
        pulseDot.classList.add("bg-green-500");
        
        statusIndicator.classList.remove("bg-red-500");
        statusIndicator.classList.add("bg-green-500");
    } else {
        // If outside market hours or on weekends, show "Offline"
        liveStatus.innerText = "Offline";
        liveStatusStyled.innerText = "Offline";
        
        // Apply red styling to the status and dots
        liveStatusStyled.classList.remove("text-green-500");
        liveStatusStyled.classList.add("text-red-500");

        statusDot.classList.remove("bg-green-500");
        statusDot.classList.add("bg-red-500");

        pingDot.classList.remove("bg-green-500");
        pingDot.classList.add("bg-red-500");

        pulseDot.classList.remove("bg-green-500");
        pulseDot.classList.add("bg-red-500");

        statusIndicator.classList.remove("bg-green-500");
        statusIndicator.classList.add("bg-red-500");
    }
}, 1000); // Update every second
</script>




<script>
    // Define market hours in Indian Standard Time (IST)
    var marketOpenHour = 9;
    var marketOpenMinute = 30;
    var marketCloseHour = 15;
    var marketCloseMinute = 30;

    // Function to get live Indian Standard Time (IST) and format it
    function getIndianTime() {
        var now = new Date();
        var options = { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
        return new Intl.DateTimeFormat('en-US', options).format(now);
    }

    // Function to get today's date in IST
    function getIndianDate() {
        var now = new Date();
        var options = { timeZone: 'Asia/Kolkata', year: 'numeric', month: 'short', day: 'numeric' };
        return new Intl.DateTimeFormat('en-US', options).format(now);
    }

    // Set the current date
    document.getElementById("currentDate").innerText = "" + getIndianDate();

    // Update the countdown and live time every second
    var countdownInterval = setInterval(function() {
        var now = new Date();
        var indianTime = getIndianTime();

        // Display live Indian time
        document.getElementById("liveTime").innerText = "" + indianTime;

        // Convert to IST for accurate day and time comparison
        var istNow = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
        var dayOfWeek = istNow.getDay(); // 0 = Sunday, 6 = Saturday

        if (dayOfWeek === 0 || dayOfWeek == 6) {
            // Display "Offline" on Saturdays and Sundays
            document.getElementById("timer").innerText = "Offline";
            document.getElementById("timerLabels").style.display = "none";
        } else {
            // Check if the market is open
            var isMarketOpen = 
                (istNow.getHours() > marketOpenHour || (istNow.getHours() === marketOpenHour && istNow.getMinutes() >= marketOpenMinute)) &&
                (istNow.getHours() < marketCloseHour || (istNow.getHours() === marketCloseHour && istNow.getMinutes() < marketCloseMinute));

            if (!isMarketOpen) {
                // Display "Market Closed" outside of market hours
                document.getElementById("timer").innerText = "Closed";
                document.getElementById("timerLabels").style.display = "none";
            } else {
                // Calculate remaining time to market close (3:30 PM IST)
                var marketCloseTime = new Date(istNow);
                marketCloseTime.setHours(marketCloseHour, marketCloseMinute, 0, 0);
                var distance = marketCloseTime - istNow;

                // Calculate hours, minutes, and seconds remaining
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);

                // Format values to always be two digits
                hours = hours < 10 ? "0" + hours : hours;
                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;

                // Update the timer display
                document.getElementById("timer").innerText = hours + ":" + minutes + ":" + seconds;
                document.getElementById("timerLabels").style.display = "flex";

                // Stop updating if countdown is over
                if (distance < 0) {
                    clearInterval(countdownInterval);
                    document.getElementById("timer").innerText = "00:00:00";
                }
            }
        }
    }, 1000); // Update every second
</script>





<script>
    document.addEventListener('DOMContentLoaded', (event) => {
        const referralLinkInput = document.getElementById('referralLinkInput');
        const copyToast = new bootstrap.Toast(document.getElementById('copyToast'));

        referralLinkInput.addEventListener('click', () => {
            // Try to use the Clipboard API
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(referralLinkInput.value).then(() => {
                    // Show the toast on successful copy
                    copyToast.show();
                }).catch(err => {
                    console.error('Failed to copy text: ', err);
                });
            } else {
                // Fallback method for older browsers
                referralLinkInput.select();
                referralLinkInput.setSelectionRange(0, 99999); // For mobile devices

                try {
                    document.execCommand('copy');
                    // Show the toast on successful copy
                    copyToast.show();
                } catch (err) {
                    console.error('Fallback: Oops, unable to copy', err);
                }
            }
        });
    });
</script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.3/js/bootstrap.bundle.min.js"></script>
<script>
    
const openModal = (isOpen)=>{
  const elModal = document.querySelector('.modal')
  if (isOpen) elModal.classList.add('open')
  else elModal.classList.remove('open')
  
}
</script>

<script>



function shareOnWhatsApp() {
  var referralLink = document.getElementById("referralLinkInput").value;
  var message = encodeURIComponent(" 🔗 Sign up for Money Mining AI Trading \n\n🤖 MM Trading AI 🤑💰 \n\nExperience the Future of Index Trading\n\n💯 Safe, Secure & Auto Prediction\nFirst time in the history of crypto trading\n\n🤖 Introducing MM AI Trading AI, a revolutionary product by MM AI Trading Eco-System\n\n✅ No need for manual strategy\n✅ No need to select individual coins\n✅ Fully automated trading bot, hands-free operation\n✅ Profit potential ranging from 1% to 20% on Turnover\n✅ Join us in shaping the future of trading\n✅ Let's make history together\n\n Empower yourself with cutting-edge technology. Join us today and revolutionize your crypto trading experience. 🚀📈\n\nFeel free to share and spread the word among your network! 🌐 #MM AI TradingAI #Crypto #AutomatedTrading");
  var whatsappLink = "https://api.whatsapp.com/send?text=" + encodeURIComponent(referralLink) + "%0A" + message ;
  window.open(whatsappLink, "_blank");
}
</script>




    <script type="text/javascript">
        $(document).ready(function () {
            $('.single-item').slick({
                centerMode: true,
                centerPadding: '0px',
                vertical: true,
                infinite: true,
                slidesToShow: 4,
                autoplay: true,
                arrows: false,
                pauseOnHover: false
            });
        });
    </script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"
        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>

    <!-- ✅ load Slick ✅ -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"
        integrity="sha512-XtmMtDEcNz2j7ekrtHvOVR4iwwaD6o/FUJe6+Zq+HgcCsk3kj4uSQQR8weQ2QVj1o0Pk6PwYLohm206ZzNfubg=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script>
    var Baseurl = "<?php echo base_url(); ?>";

    function saveTotalAmount() {
        // Get the total amount from the span text
        let totalAmount = document.getElementById('total-amount').textContent.trim();
        
        // Log the value to ensure it's being captured correctly
        console.log('Total amount:', totalAmount);

        // Check if totalAmount is valid
        if (isNaN(totalAmount) || totalAmount === '') {
            console.error('Invalid amount value:', totalAmount);
            return;
        }

        // Send the value to the backend
        fetch(Baseurl + 'Ajax/save_total_amount', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ total_amount: totalAmount })  // Send the value as JSON
        })
  .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
    }, 86400000);
</script>

<script>
function confirmLogout(event) {
    // Show a confirmation dialog
    const userConfirmed = confirm("Are you sure, you want to log out?", "Are you sure?");
    if (!userConfirmed) {
        // Prevent navigation if the user cancels
        event.preventDefault();
    }
    return userConfirmed;
}
</script>


</body>

</html>
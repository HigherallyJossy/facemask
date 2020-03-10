<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>facemask99</title>    
</head>

<body style="background:#f1f1f1;padding-top:20px;padding-bottom:20px;">
    <center>
        <table class="" border="0" cellspacing="0" cellpadding="0" width="600"
            style="width:6.25in;background:#ffffff;border-collapse:collapse">
            <tbody>
                <tr>
                    <td height="10"></td>
                </tr>
                
                <tr>
                    <td style="padding-left:20px;" align="center">
                        <a href="https://facemask99.com">
                            <img src="https://testing.adnlist.com/assets/images/emaillogo.jpg" alt="">
                        </a>
                    </td>
                </tr>
                <tr>
                    <td height="40"></td>
                </tr>
                @if($feedback['role'] == "user")
                <tr>
                    <td>
                        <p style="margin:5px 0px 5px 0px;font-size:18px;color:#222;font-family: Montserrat;font-weight:600;">
                            Hi
                        </p>
                        <br>
                        <p style="margin:5px 0px 5px 0px;font-size:18px;color:#222;font-family: Montserrat;font-weight:600;">
                            Thank you for your order from facemask99. If you have questions about your order, you can email us at <a style="color:#00ee00;" href="mailto:facemask99.com@gmail.com">facemask99.com@gmail.com</a>
                            Our hours are 24/7.
                        </p>
                        <br>
                        <p style="margin:5px 0px 5px 0px;font-size:18px;color:#222;font-family: Montserrat;font-weight:600;">
                            Your shipping confirmation is below. Thank you again for your business.
                        </p>
                    </td>
                </tr>                  
                <tr>
                    <td height="20">
                        
                    </td>
                </tr> 
                @endif
                <tr>
                    <td style="padding-left:20px;">
                        <p style="margin:5px 0px 5px 0px;font-size:20px;color:#222;font-family: Montserrat;font-weight:600;">
                            @if($feedback['role'] == "user") Your @endif Order 
                        </p>
                    </td>
                </tr>  
                <tr>
                    <td height="40">
                        
                    </td>
                </tr> 
                <tr>
                    <td>
                        <p style="margin:5px 0px 5px 0px;font-size:20px;color:#222;font-family: Montserrat;font-weight:600;">
                            Tracking Number
                        </p>                        
                    </td>
                </tr>  
                <tr>
                    <td style="padding-left:20px;">
                        <p style="margin:5px 0px 5px 0px;font-size:20px;color:#222;font-family: Montserrat;font-weight:600;">
                            Shipping and Billing Info
                        </p>
                    </td>
                </tr> 
                     
                <tr>
                    <td style="padding-left:20px;"> 
                       
                        <p style="margin:10px 0px 10px 0px;font-size:18px;color:#222;font-family: Montserrat;font-weight:500;">
                        {{ $feedback['username'] }} (<a href="#">{{ $feedback['email'] }}</a>)
                        </p>
                        
                        <p style="margin:10px 0px 10px 0px;font-size:18px;color:#222;font-family: Montserrat;font-weight:500;">
                            Phone: {{ $feedback['phone'] }}
                        </p>
                        <p style="margin:10px 0px 10px 0px;font-size:18px;color:#222;font-family: Montserrat;font-weight:500;">
                            {{ $feedback['address'] }}&nbsp;&nbsp;{{ $feedback['zip'] }}
                        </p>                        
                                            
                    </td>
                </tr> 
                <tr>
                    <td style="" height="40">
                        
                    </td>
                </tr> 
                <tr>
                    <td style="padding-left:20px;">
                        <table>
                            <tr>
                                <td>
                                    <p style="margin:5px 0px 5px 0px;font-size:20px;color:#222;font-family: Montserrat;font-weight:600;">
                                        Transaction ID
                                    </p>
                                </td>
                                <td>
                                    <p style="margin:5px 0px 5px 0px;font-size:20px;color:#222;font-family: Montserrat;font-weight:600;">
                                        Payment type
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p style="margin:5px 0px 5px 0px;font-size:18px;color:#222;font-family: Montserrat;font-weight:600;">
                                        {{ $feedback['paytype'] }}
                                    </p>
                                </td>
                                <td>
                                    <p style="margin:5px 0px 5px 0px;font-size:18px;color:#222;font-family: Montserrat;font-weight:600;">
                                        {{ $feedback['paytype'] }}
                                    </p>
                                </td>
                            </tr>
                        </table>
                        
                    </td>
                </tr> 
                <tr>
                    <td style="" height="40">
                        
                    </td>
                </tr> 

                <tr>
                    <td>
                        <table>
                            <tr bgcolor="#000000">
                                <td width="20%">
                                    <label for="" style="color:#ffffff">Sub Total</label>
                                </td>
                                <td width="20%">
                                    <label for="" style="color:#ffffff">Price</label>
                                </td>
                                <td>
                                    <label for="" style="color:#ffffff">Item</label>
                                </td>
                                <td width="20%">
                                    <label for="" style="color:#ffffff">S.No</label>
                                </td>
                            </tr>
                            @php
                                $name = $feedback['name'];
                                $price = $feedback['price'];
                                $count = $feedback['count'];
                            @endphp

                            @if(!empty($name))
                                @for ($i = 0; $i < count($name); $i++)
                                    @php
                                     $subtotal = str_replace("$","",$price[$i]);   
                                     $subtotal = (int)$subtotal;
                                     $subtotal = $subtotal*(int)$count[$i];
                                    @endphp
                                    <tr bgcolor="#dedede">
                                        <td>
                                            <p style="margin:5px 0px 5px 0px;font-size:18px;color:#222;font-family: Montserrat;font-weight:500;">
                                                {{ $subtotal }}
                                            </p>
                                        </td>
                                        <td>
                                            <p style="margin:5px 0px 5px 0px;font-size:18px;color:#222;font-family: Montserrat;font-weight:500;">
                                                {{ $price[$i] }}
                                            </p>
                                        </td>
                                        <td>
                                            <p style="margin:5px 0px 5px 0px;font-size:18px;color:#222;font-family: Montserrat;font-weight:500;">
                                                {{ $name[$i] }}
                                            </p>
                                        </td>
                                        <td>
                                            <p style="margin:5px 0px 5px 0px;font-size:18px;color:#222;font-family: Montserrat;font-weight:500;">
                                                {{ $count[$i] }}
                                            </p>
                                        </td>                                        
                                    </tr>
                                @endfor  
                            @endif
                            <tr>
                                <td>
                                    <label for="" style="font-size:24px;"><b>Total: {{ $feedback["totalprice"] }}</b></label>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>

                     
                <tr>
                    <td height="40">
                        
                    </td>
                </tr> 
            </tbody>
        </table>
    </center>
</body>

</html>

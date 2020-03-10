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
                        <p style="font-weight:600;font-size:36px;"><span style="color:#004000;">facemask99.com</span></p>
                    </td>
                </tr>
                <tr>
                    <td height="10"></td>
                </tr>
                
                <tr>
                    <td style="padding-left:20px;">
                        <p style="margin:5px 0px 5px 0px;font-size:18px;color:#222;font-family: Montserrat;font-weight:600;">
                            User details
                        </p>
                    </td>
                </tr> 
                <tr>
                    <td style="border-top:1px solid #000000;">
                        
                    </td>
                </tr>                
                <tr>
                    <td style="padding-left:20px;"> 
                       
                        <p style="margin:10px 0px 10px 0px;font-size:18px;color:#222;font-family: Montserrat;font-weight:500;">
                            Full name: {{ $feedback['username'] }}
                        </p>
                        <p style="margin:10px 0px 10px 0px;font-size:18px;color:#222;font-family: Montserrat;font-weight:500;">
                            Email: {{ $feedback['email'] }}
                        </p>
                        <p style="margin:10px 0px 10px 0px;font-size:18px;color:#222;font-family: Montserrat;font-weight:500;">
                            Phone: {{ $feedback['phone'] }}
                        </p>
                        <p style="margin:10px 0px 10px 0px;font-size:18px;color:#222;font-family: Montserrat;font-weight:500;">
                            Address: {{ $feedback['address'] }}
                        </p>
                        <p style="margin:10px 0px 10px 0px;font-size:18px;color:#222;font-family: Montserrat;font-weight:500;">
                            Zipcode: {{ $feedback['zip'] }}
                        </p>
                                            
                    </td>
                </tr> 

                <tr>
                    <td style="border-bottom:1px solid #000000;" height="10">
                        
                    </td>
                </tr> 

                <tr>
                    <td style="padding-left:20px;">
                        <p style="margin:5px 0px 5px 0px;font-size:18px;color:#222;font-family: Montserrat;font-weight:600;">
                            Payment details
                        </p>
                    </td>
                </tr> 
                <tr>
                    <td style="border-top:1px solid #000000;" height="10">
                        
                    </td>
                </tr>                
                <tr>
                    <td style="padding-left:20px;">
                        @php
                            $name = $feedback['name'];
                            $price = $feedback['price'];
                            $count = $feedback['count'];
                        @endphp
                        @if(!empty($name))
                            @for ($i = 0; $i < count($name); $i++)
                                <p style="margin:5px 0px 5px 0px;font-size:18px;color:#222;font-family: Montserrat;font-weight:500;">
                                    <span>{{ $name[$i] }}</span>:&nbsp;&nbsp; <span>{{ $price[$i] }}</span> x <span>{{ $count[$i] }}</span>
                                </p>
                            @endfor  
                        @endif
                    </td>
                </tr> 
                <tr>
                    <td style="border-bottom:1px solid #000000;height:10px;">
                        
                    </td>
                </tr>          
                <tr>
                    <td style="padding-left:20px;">
                        <label for="" style="font-size:22px;"><b>Total: {{ $feedback["totalprice"] }}</b></label>
                    </td>
                </tr> 
            </tbody>
        </table>
    </center>
</body>

</html>

const templateUserRegistered =(templateInfo)=>{



    return `
    
    <!DOCTYPE html
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <!--[if gte mso 15]>
              <xml>
                  <o:OfficeDocumentSettings>
                      <o:AllowPNG />
                      <o:PixelsPerInch>96</o:PixelsPerInch>
                  </o:OfficeDocumentSettings>
              </xml>
          <![endif]-->
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="format-detection" content="date=no" />
    <meta name="format-detection" content="address=no" />
    <meta name="format-detection" content="telephone=no" />
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,400italic,700italic,700" rel="stylesheet"
        type="text/css" />
    <title>Chapnik & Giesen</title>
    <style type="text/css" media="screen">
        [style*='SSP'] {
            font-family: 'Source Sans Pro', Arial, sans-serif !important;
        }

        /* Linked Styles */
        body {
            padding: 0 !important;
            margin: 0 !important;
            display: block !important;
            min-width: 100% !important;
            width: 100% !important;
            background: #fff;
            -webkit-text-size-adjust: none;
        }

        a {
            color: #949490;
            text-decoration: underline;
        }

        p {
            padding: 0 !important;
            margin: 0 !important;
        }

        img {
            -ms-interpolation-mode: bicubic;
            /* Allow smoother rendering of resized image in Internet Explorer */
        }

        /* Mobile styles */
        @media only screen and (max-device-width: 480px),
        only screen and (max-width: 480px) {
            div[class='mobile-br-1'] {
                height: 1px !important;
                display: block !important;
                background: #e9e8e2 !important;
            }

            div[class='mobile-br-5'] {
                height: 5px !important;
            }

            div[class='mobile-br-10'] {
                height: 10px !important;
            }

            div[class='mobile-br-15'] {
                height: 15px !important;
            }

            div[class='mobile-br-20'] {
                height: 20px !important;
            }

            div[class='mobile-br-25'] {
                height: 25px !important;
            }

            th[class='m-td'],
            td[class='m-td'],
            div[class='hide-for-mobile'],
            span[class='hide-for-mobile'] {
                display: none !important;
                width: 0 !important;
                height: 0 !important;
                font-size: 0 !important;
                line-height: 0 !important;
                min-height: 0 !important;
            }

            span[class='mobile-block'] {
                display: block !important;
            }

            div[class='text-footer'],
            td[class='text-footer'],
            div[class='text-footer-r'],
            td[class='text-footer-r'],
            div[class='img-m-center'] {
                text-align: center !important;
            }

            div[class='fluid-img'] img,
            td[class='fluid-img'] img {
                width: 100% !important;
                max-width: 100% !important;
                height: auto !important;
            }

            table[class='mobile-shell'] {
                width: 100% !important;
                min-width: 100% !important;
            }

            table[class='center'] {
                margin: 0 auto;
            }

            td[class='column'],
            th[class='column'] {
                float: left !important;
                width: 100% !important;
                display: block !important;
            }

            td[class='td'] {
                width: 100% !important;
                min-width: 100% !important;
            }

            td[class='bg'] {
                background-size: cover !important;
                background-repeat: no-repeat !important;
                background-position: center center !important;
            }

            td[class='content-spacing'] {
                width: 15px !important;
            }
        }
    </style>
</head>

<body class="body" style="
              padding: 0 !important;
              margin: 0 !important;
              display: block !important;
              min-width: 100% !important;
              width: 100% !important;
              background: #f0f2f5;
              -webkit-text-size-adjust: none;
          ">
    <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#f0f2f5">
        <tr>
            <td align="center" valign="top">
                <table width="650" border="0" cellspacing="0" cellpadding="0" class="mobile-shell">
                    <tr>
                        <td class="td" style="
                                      width: 650px;
                                      min-width: 650px;
                                      font-size: 0pt;
                                      line-height: 0pt;
                                      padding: 0;
                                      margin: 0;
                                      font-weight: normal;
                                      margin: 0;
                                  ">
                            <!-- Header -->
                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td>
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer"
                                            style="
                                                      font-size: 0pt;
                                                      line-height: 0pt;
                                                      text-align: center;
                                                      width: 100%;
                                                      min-width: 100%;
                                                  ">
                                            <tr>
                                                <td height="30" class="spacer" style="
                                                              font-size: 0pt;
                                                              line-height: 0pt;
                                                              text-align: center;
                                                              width: 100%;
                                                              min-width: 100%;
                                                          ">
                                                    &nbsp;
                                                </td>
                                            </tr>
                                        </table>

                                        <!-- Header Inner -->
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td>
                                                    <!-- Header Inner Red Line -->
                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0"
                                                        bgcolor="#999">
                                                        <tr>
                                                            <td valign="top">
                                                                <div style="
                                                                              font-size: 0pt;
                                                                              line-height: 0pt;
                                                                              height: 4px;
                                                                              background: #999;
                                                                          "></div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    <!-- END Header Inner Red Line -->

                                                    <!-- Logo + Date + Links -->
                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0"
                                                        bgcolor="#212121">
                                                        <tr>
                                                            <td class="content-spacing" style="
                                                                          font-size: 0pt;
                                                                          line-height: 0pt;
                                                                          text-align: left;
                                                                      " width="30"></td>
                                                            <td>
                                                                <table width="100%" border="0" cellspacing="0"
                                                                    cellpadding="0" class="spacer" style="
                                                                              font-size: 0pt;
                                                                              line-height: 0pt;
                                                                              text-align: center;
                                                                              width: 100%;
                                                                              min-width: 100%;
                                                                          ">
                                                                    <tr>
                                                                        <td height="15" class="spacer" style="
                                                                                      font-size: 0pt;
                                                                                      line-height: 0pt;
                                                                                      text-align: center;
                                                                                      width: 100%;
                                                                                      min-width: 100%;
                                                                                  ">
                                                                            &nbsp;
                                                                        </td>
                                                                    </tr>
                                                                </table>

                                                                <table width="100%" border="0" cellspacing="0"
                                                                    cellpadding="0">
                                                                    <tr>
                                                                        <!-- Column -->
                                                                        <th class="column" style="
                                                                                      font-size: 0pt;
                                                                                      line-height: 0pt;
                                                                                      padding: 0;
                                                                                      margin: 0;
                                                                                      font-weight: normal;
                                                                                      margin: 0;
                                                                                  " width="202" valign="top">
                                                                            <table width="100%" border="0"
                                                                                cellspacing="0" cellpadding="0">
                                                                                <tr>
                                                                                    <td class="img" style="
                                                                                                  font-size: 0pt;
                                                                                                  line-height: 0pt;
                                                                                                  text-align: left;
                                                                                              ">
                                                                                        <!-- Logo -->
                                                                                        <div class="img-m-center" style="
                                                                                                      font-size: 0pt;
                                                                                                      line-height: 0pt;
                                                                                                      text-align: left;
                                                                                                  ">

                                                                                            <img src="http://localhost:5000/public/assets/img/products/HYpnoticgrowshop.png"
                                                                                                border="0" height="50"
                                                                                                alt="Logo chapnikandgiesen Oficial" />
                                                                                        </div>
                                                                                        <!-- END Logo -->
                                                                                        <div style="
                                                                                                      font-size: 0pt;
                                                                                                      line-height: 0pt;
                                                                                                  "
                                                                                            class="mobile-br-20"></div>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </th>
                                                                        <!-- END Column -->

                                                                        <!-- Column -->
                                                                        <th class="column" style="
                                                                                      font-size: 0pt;
                                                                                      line-height: 0pt;
                                                                                      padding: 0;
                                                                                      margin: 0;
                                                                                      font-weight: normal;
                                                                                      margin: 0;
                                                                                  " valign="top">
                                                                            <table width="100%" border="0"
                                                                                cellspacing="0" cellpadding="0">
                                                                                <tr>
                                                                                    <td align="right" style="
                                                                                                  padding-top: 10px;
                                                                                              ">
                                                                                        <!-- Date + Links -->
                                                                                        <table class="center" border="0"
                                                                                            cellspacing="0"
                                                                                            cellpadding="0">
                                                                                            <tr>
                                                                                                <td class="text-nav"
                                                                                                    style="
                                                                                                    
                                                                                                              color: #ffffff;
                                                                                                              font-family: Arial,
                                                                                                                  sans-serif,
                                                                                                                  'SSP';
                                                                                                              font-size: 12px;
                                                                                                              line-height: 16px;
                                                                                                              text-align: left;
                                                                                                              text-transform: uppercase;
                                                                                                          ">

                                                                                                    <a href="mailto:contacto@++++"
                                                                                                        target="_blank"
                                                                                                        class="link-white"
                                                                                                        style="
          color: #ffffff;
          text-decoration: none;
      "><span style="
                                                                                                                  color: #ffffff;
                                                                                                                  text-decoration: none;
                                                                                                              " span
                                                                                                            class="link-white"
                                                                                                            style="
                                                                                                                      color: #ffffff;
                                                                                                                      text-decoration: none;
                                                                                                                  ">Acceso</span></a>
                                                                                                </td>
                                                                                                <td class="img" style="
                                                                                                              font-size: 0pt;
                                                                                                              line-height: 0pt;
                                                                                                              text-align: left;
                                                                                                              border-right: 0.3px
                                                                                                                  solid
                                                                                                                  #999;
                                                                                                          " width="12">
                                                                                                </td>
                                                                                                <td width="1"
                                                                                                    class="img" style="
                                                                                                              font-size: 0pt;
                                                                                                              line-height: 0pt;
                                                                                                              text-align: left;
                                                                                                          "></td>
                                                                                                <td class="img" style="
                                                                                                              font-size: 0pt;
                                                                                                              line-height: 0pt;
                                                                                                              text-align: left;
                                                                                                          " width="12">
                                                                                                </td>
                                                                                                <td class="text-nav"
                                                                                                    style="
                                                                                                              color: #ffffff;
                                                                                                              font-family: Arial,
                                                                                                                  sans-serif,
                                                                                                                  'SSP';
                                                                                                              font-size: 12px;
                                                                                                              line-height: 16px;
                                                                                                              text-align: left;
                                                                                                              text-transform: uppercase;
                                                                                                          ">
                                                                                                    <a href="mailto:contacto@++++"
                                                                                                        target="_blank"
                                                                                                        class="link-white"
                                                                                                        style="
                                                                                                                  color: #ffffff;
                                                                                                                  text-decoration: none;
                                                                                                              "><span
                                                                                                            class="link-white"
                                                                                                            style="
                                                                                                                      color: #ffffff;
                                                                                                                      text-decoration: none;
                                                                                                                  ">Contactanos
                                                                                                        </span></a>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </table>
                                                                                        <!-- END Date + Links -->
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </th>
                                                                        <!-- END Column -->
                                                                    </tr>
                                                                </table>
                                                                <table width="100%" border="0" cellspacing="0"
                                                                    cellpadding="0" class="spacer" style="
                                                                              font-size: 0pt;
                                                                              line-height: 0pt;
                                                                              text-align: center;
                                                                              width: 100%;
                                                                              min-width: 100%;
                                                                          ">
                                                                    <tr>
                                                                        <td height="10" class="spacer" style="
                                                                                      font-size: 0pt;
                                                                                      line-height: 0pt;
                                                                                      text-align: center;
                                                                                      width: 100%;
                                                                                      min-width: 100%;
                                                                                  ">
                                                                            &nbsp;
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                            <td class="content-spacing" style="
                                                                          font-size: 0pt;
                                                                          line-height: 0pt;
                                                                          text-align: left;
                                                                      " width="30"></td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                        <!-- END Header Inner -->
                                    </td>
                                </tr>
                            </table>
                            <!-- END Header -->

                            <!-- Main -->
                            <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#ffffff">
                                <tr>
                                    <td>
                                        <!-- Section 1 -->
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td background="http://localhost:5000/public/assets/img/products/HYpnoticgrowshop.png"
                                                    bgcolor="#44453f" valign="top" height="240" class="bg">
                                                    <!--[if gte mso 9]>
                                                      <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:650px; height: 240px">
                                                          <v:fill type="frame" src="http://localhost:5000/public/assets/img/products/HYpnoticgrowshop.png" color="#44453f" />
                                                          <v:textbox inset="0,0,0,0">
                                                      <![endif]-->
                                                    <div>
                                                        <table width="50%" border="0" cellspacing="0" cellpadding="0">
                                                            <tr>
                                                                <td class="content-spacing" style="
                                                                              font-size: 0pt;
                                                                              line-height: 0pt;
                                                                              text-align: left;
                                                                          " width="30" height="240"></td>
                                                                <td>
                                                                    <div style="
                                                                                  font-size: 0pt;
                                                                                  line-height: 0pt;
                                                                              " class="mobile-br-15"></div>

                                                                    <table width="100%" border="0" cellspacing="0"
                                                                        cellpadding="0" class="spacer" style="
                                                                                  font-size: 0pt;
                                                                                  line-height: 0pt;
                                                                                  text-align: center;
                                                                                  width: 100%;
                                                                                  min-width: 100%;
                                                                              ">
                                                                        <tr>
                                                                            <td height="12" class="spacer" style="
                                                                                          font-size: 0pt;
                                                                                          line-height: 0pt;
                                                                                          text-align: center;
                                                                                          width: 100%;
                                                                                          min-width: 100%;
                                                                                      ">
                                                                                &nbsp;
                                                                            </td>
                                                                        </tr>
                                                                    </table>

                                                                    <div class="h3-white-center" style="
                                                                                
                                                                                  font-family: Arial,
                                                                                      sans-serif,
                                                                                      'SSP';
                                                                                  font-size: 24px;
                                                                                  line-height: 30px;
                                                                                  text-align: left;
                                                                              ">
                                                                        Bienvenido <br> Hypnotic Grow Shop
                                                                    </div>
                                                                    <table width="100%" border="0" cellspacing="0"
                                                                        cellpadding="0" class="spacer" style="
                                                                                  font-size: 0pt;
                                                                                  line-height: 0pt;
                                                                                  text-align: center;
                                                                                  width: 100%;
                                                                                  min-width: 100%;
                                                                              ">
                                                                        <tr>
                                                                            <td height="15" class="spacer" style="
                                                                                          font-size: 0pt;
                                                                                          line-height: 0pt;
                                                                                          text-align: center;
                                                                                          width: 100%;
                                                                                          min-width: 100%;
                                                                                      ">
                                                                                &nbsp;
                                                                            </td>
                                                                        </tr>
                                                                    </table>

                                                                    <div class="text-white-center" style="
                                                                                
                                                                                  font-family: Arial,
                                                                                      sans-serif,
                                                                                      'SSP';
                                                                                  font-size: 15px;
                                                                                  line-height: 24px;
                                                                                  text-align: left;
                                                                              ">
                                                                        Todo para tu cultivo.
                                                                    </div>
                                                                    <table width="100%" border="0" cellspacing="0"
                                                                        cellpadding="0" class="spacer" style="
                                                                                  font-size: 0pt;
                                                                                  line-height: 0pt;
                                                                                  text-align: center;
                                                                                  width: 100%;
                                                                                  min-width: 100%;
                                                                              ">
                                                                        <tr>
                                                                            <td height="17" class="spacer" style="
                                                                                          font-size: 0pt;
                                                                                          line-height: 0pt;
                                                                                          text-align: center;
                                                                                          width: 100%;
                                                                                          min-width: 100%;
                                                                                      ">
                                                                                &nbsp;
                                                                            </td>
                                                                        </tr>
                                                                    </table>

                                                                    <table width="100%" border="0" cellspacing="0"
                                                                        cellpadding="0" class="spacer" style="
                                                                                  font-size: 0pt;
                                                                                  line-height: 0pt;
                                                                                  text-align: center;
                                                                                  width: 100%;
                                                                                  min-width: 100%;
                                                                              ">
                                                                        <tr>
                                                                            <td height="12" class="spacer" style="
                                                                                          font-size: 0pt;
                                                                                          line-height: 0pt;
                                                                                          text-align: center;
                                                                                          width: 100%;
                                                                                          min-width: 100%;
                                                                                      ">
                                                                                &nbsp;
                                                                            </td>
                                                                        </tr>
                                                                    </table>

                                                                    <div style="
                                                                                  font-size: 0pt;
                                                                                  line-height: 0pt;
                                                                              " class="mobile-br-15"></div>
                                                                </td>
                                                                <td class="content-spacing" style="
                                                                              font-size: 0pt;
                                                                              line-height: 0pt;
                                                                              text-align: left;
                                                                          " width="30"></td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                    <!--[if gte mso 9]>
                                                          </v:textbox>
                                                          </v:rect>
                                                      <![endif]-->
                                                </td>
                                            </tr>
                                        </table>
                                        <!-- END Section 1 -->
                                        <!-- Header Inner Red Line -->
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#">
                                            <tr>
                                                <td valign="top">
                                                    <div style="
                                                                  font-size: 0pt;
                                                                  line-height: 0pt;
                                                                  height: 4px;
                                                                  background: #999;
                                                              "></div>
                                                </td>
                                            </tr>
                                        </table>
                                        <!-- END Header Inner Red Line -->

                                        <!-- Section 9 -->
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td>
                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0"
                                                        class="spacer" style="
                                                                  font-size: 0pt;
                                                                  line-height: 0pt;
                                                                  text-align: center;
                                                                  width: 100%;
                                                                  min-width: 100%;
                                                              ">
                                                        <tr>
                                                            <td height="40" class="spacer" style="
                                                                          font-size: 0pt;
                                                                          line-height: 0pt;
                                                                          text-align: center;
                                                                          width: 100%;
                                                                          min-width: 100%;
                                                                      ">
                                                                &nbsp;
                                                            </td>
                                                        </tr>
                                                    </table>

                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0"
                                                        bgcolor="#ffffff">
                                                        <tr>
                                                            <td class="content-spacing" style="
                                                                          font-size: 0pt;
                                                                          line-height: 0pt;
                                                                          text-align: left;
                                                                      " width="30"></td>
                                                            <td>
                                                                <div class="h3" style="
                                                                              color: #;
                                                                              font-family: Arial,
                                                                                  sans-serif,
                                                                                  'SSP';
                                                                              font-size: 24px;
                                                                              line-height: 30px;
                                                                              text-align: center;
                                                                          ">
                                                                    Información de acceso
                                                                </div>
                                                                <table width="100%" border="0" cellspacing="0"
                                                                    cellpadding="0" class="spacer" style="
                                                                              font-size: 0pt;
                                                                              line-height: 0pt;
                                                                              text-align: center;
                                                                              width: 100%;
                                                                              min-width: 100%;
                                                                          ">
                                                                    <tr>
                                                                        <td height="18" class="spacer" style="
                                                                                      font-size: 0pt;
                                                                                      line-height: 0pt;
                                                                                      text-align: center;
                                                                                      width: 100%;
                                                                                      min-width: 100%;
                                                                                  ">
                                                                            &nbsp;
                                                                        </td>
                                                                    </tr>
                                                                </table>

                                                                <table width="100%" border="0" cellspacing="0"
                                                                    cellpadding="0">
                                                                    <tr>
                                                                        <td class="img" style="
                                                                                      font-size: 0pt;
                                                                                      line-height: 0pt;
                                                                                      text-align: left;
                                                                                  " width="20">
                                                                            <table width="100%" border="0"
                                                                                cellspacing="0" cellpadding="0"
                                                                                class="spacer" style="
                                                                                          font-size: 0pt;
                                                                                          line-height: 0pt;
                                                                                          text-align: center;
                                                                                          width: 100%;
                                                                                          min-width: 100%;
                                                                                      ">
                                                                                <tr>
                                                                                    <td height="3" class="spacer" style="
                                                                                                  font-size: 0pt;
                                                                                                  line-height: 0pt;
                                                                                                  text-align: center;
                                                                                                  width: 100%;
                                                                                                  min-width: 100%;
                                                                                              ">
                                                                                        &nbsp;
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                            <img src="++++" border="0" width="11"
                                                                                height="11" alt="right arrow 1" />
                                                                        </td>
                                                                        <td class="text3" style="
                                                                                      color: #55544d;
                                                                                      font-family: Arial,
                                                                                          sans-serif,
                                                                                          'SSP';
                                                                                      font-size: 14px;
                                                                                      line-height: 24px;
                                                                                      text-align: left;
                                                                                  ">
                                                                            Usuario:
                                                                            ${templateInfo.email}
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                                <table width="100%" border="0" cellspacing="0"
                                                                    cellpadding="0" class="spacer" style="
                                                                              font-size: 0pt;
                                                                              line-height: 0pt;
                                                                              text-align: center;
                                                                              width: 100%;
                                                                              min-width: 100%;
                                                                          ">
                                                                    <tr>
                                                                        <td height="10" class="spacer" style="
                                                                                      font-size: 0pt;
                                                                                      line-height: 0pt;
                                                                                      text-align: center;
                                                                                      width: 100%;
                                                                                      min-width: 100%;
                                                                                  ">
                                                                            &nbsp;
                                                                        </td>
                                                                    </tr>
                                                                </table>

                                                                <table width="100%" border="0" cellspacing="0"
                                                                    cellpadding="0">
                                                                    <tr>
                                                                        <td class="img" style="
                                                                                      font-size: 0pt;
                                                                                      line-height: 0pt;
                                                                                      text-align: left;
                                                                                  " width="20">
                                                                            <table width="100%" border="0"
                                                                                cellspacing="0" cellpadding="0"
                                                                                class="spacer" style="
                                                                                          font-size: 0pt;
                                                                                          line-height: 0pt;
                                                                                          text-align: center;
                                                                                          width: 100%;
                                                                                          min-width: 100%;
                                                                                      ">
                                                                                <tr>
                                                                                    <td height="3" class="spacer" style="
                                                                                                  font-size: 0pt;
                                                                                                  line-height: 0pt;
                                                                                                  text-align: center;
                                                                                                  width: 100%;
                                                                                                  min-width: 100%;
                                                                                              ">
                                                                                        &nbsp;
                                                                                    </td>
                                                                                </tr>
                                                                            </table>

                                                                            <img src="++++" border="0" width="11"
                                                                                height="11" alt="right arrow 2" />
                                                                        </td>
                                                                        <td class="text3" style="
                                                                                      color: #55544d;
                                                                                      font-family: Arial,
                                                                                          sans-serif,
                                                                                          'SSP';
                                                                                      font-size: 14px;
                                                                                      line-height: 24px;
                                                                                      text-align: left;
                                                                                  ">
                                                                            Contraseña:
                                                                            ${templateInfo.password}
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                                <table width="100%" border="0" cellspacing="0"
                                                                    cellpadding="0" class="spacer" style="
                                                                              font-size: 0pt;
                                                                              line-height: 0pt;
                                                                              text-align: center;
                                                                              width: 100%;
                                                                              min-width: 100%;
                                                                          ">
                                                                    <tr>
                                                                        <td height="10" class="spacer" style="
                                                                                      font-size: 0pt;
                                                                                      line-height: 0pt;
                                                                                      text-align: center;
                                                                                      width: 100%;
                                                                                      min-width: 100%;
                                                                                  ">
                                                                            &nbsp;
                                                                        </td>
                                                                    </tr>
                                                                </table>

                                                                <div class="text-white-center" style="
                                                                              color: #55544d;
                                                                              font-family: Arial,
                                                                                  sans-serif,
                                                                                  'SSP';
                                                                              font-size: 14px;
                                                                              line-height: 24px;
                                                                              text-align: center;
                                                                          ">
                                                                    Tienes que cambiar tu contraseña la primera vez que
                                                                    accedes a la plataforma.
                                                                </div>
                                                                <table width="100%" border="0" cellspacing="0"
                                                                    cellpadding="0" class="spacer" style="
                                                                              font-size: 0pt;
                                                                              line-height: 0pt;
                                                                              text-align: center;
                                                                              width: 100%;
                                                                              min-width: 100%;
                                                                          ">
                                                                    <tr>
                                                                        <td height="15" class="spacer" style="
                                                                                      font-size: 0pt;
                                                                                      line-height: 0pt;
                                                                                      text-align: center;
                                                                                      width: 100%;
                                                                                      min-width: 100%;
                                                                                  ">
                                                                            &nbsp;
                                                                        </td>
                                                                    </tr>
                                                                </table>

                                                                <div class="hide-for-mobile">
                                                                    <table width="100%" border="0" cellspacing="0"
                                                                        cellpadding="0" class="spacer" style="
                                                                                  font-size: 0pt;
                                                                                  line-height: 0pt;
                                                                                  text-align: center;
                                                                                  width: 100%;
                                                                                  min-width: 100%;
                                                                              ">
                                                                        <tr>
                                                                            <td height="12" class="spacer" style="
                                                                                          font-size: 0pt;
                                                                                          line-height: 0pt;
                                                                                          text-align: center;
                                                                                          width: 100%;
                                                                                          min-width: 100%;
                                                                                      ">
                                                                                &nbsp;
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </div>
                                                                <table width="100%" border="0" cellspacing="0"
                                                                    cellpadding="0" class="spacer" style="
                                                                              font-size: 0pt;
                                                                              line-height: 0pt;
                                                                              text-align: center;
                                                                              width: 100%;
                                                                              min-width: 100%;
                                                                          ">
                                                                    <tr>
                                                                        <td height="30" class="spacer" style="
                                                                                      font-size: 0pt;
                                                                                      line-height: 0pt;
                                                                                      text-align: center;
                                                                                      width: 100%;
                                                                                      min-width: 100%;
                                                                                  ">
                                                                            &nbsp;
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                            <td class="content-spacing" style="
                                                                          font-size: 0pt;
                                                                          line-height: 0pt;
                                                                          text-align: left;
                                                                      " width="30"></td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                        <!-- END Section 9 -->

                                        <!-- Section 2 -->
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0"
                                            bgcolor="#212121">
                                            <tr>
                                                <td class="content-spacing" style="
                                                              font-size: 0pt;
                                                              line-height: 0pt;
                                                              text-align: left;
                                                          " width="30"></td>
                                                <td>
                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0"
                                                        class="spacer" style="
                                                                  font-size: 0pt;
                                                                  line-height: 0pt;
                                                                  text-align: center;
                                                                  width: 100%;
                                                                  min-width: 100%;
                                                              ">
                                                        <tr>
                                                            <td height="30" class="spacer" style="
                                                                          font-size: 0pt;
                                                                          line-height: 0pt;
                                                                          text-align: center;
                                                                          width: 100%;
                                                                          min-width: 100%;
                                                                      ">
                                                                &nbsp;
                                                            </td>
                                                        </tr>
                                                    </table>

                                                    <div class="h2-white-center" style="
                                                                  color: #ffffff;
                                                                  font-family: Arial,
                                                                      sans-serif,
                                                                      'SSP';
                                                                  font-size: 30px;
                                                                  line-height: 38px;
                                                                  text-align: center;
                                                              ">
                                                        Hypnotic Grow Shop
                                                    </div>
                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0"
                                                        class="spacer" style="
                                                                  font-size: 0pt;
                                                                  line-height: 0pt;
                                                                  text-align: center;
                                                                  width: 100%;
                                                                  min-width: 100%;
                                                              ">
                                                        <tr>
                                                            <td height="8" class="spacer" style="
                                                                          font-size: 0pt;
                                                                          line-height: 0pt;
                                                                          text-align: center;
                                                                          width: 100%;
                                                                          min-width: 100%;
                                                                      ">
                                                                &nbsp;
                                                            </td>
                                                        </tr>
                                                    </table>

                                                    <div class="text-white-center" style="
                                                                  color: #ffffff;
                                                                  font-family: Arial,
                                                                      sans-serif,
                                                                      'SSP';
                                                                  font-size: 14px;
                                                                  line-height: 24px;
                                                                  text-align: center;
                                                              ">
                                                        Compra todos los productos en un solo lugar, al mejor precio.
                                                    </div>
                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0"
                                                        class="spacer" style="
                                                                  font-size: 0pt;
                                                                  line-height: 0pt;
                                                                  text-align: center;
                                                                  width: 100%;
                                                                  min-width: 100%;
                                                              ">
                                                        <tr>
                                                            <td height="15" class="spacer" style="
                                                                          font-size: 0pt;
                                                                          line-height: 0pt;
                                                                          text-align: center;
                                                                          width: 100%;
                                                                          min-width: 100%;
                                                                      ">
                                                                &nbsp;
                                                            </td>
                                                        </tr>
                                                    </table>

                                                    <!-- Call To Action -->
                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                        <tr>
                                                            <td align="center">
                                                                <table border="0" cellspacing="0" cellpadding="0">
                                                                    <tr>


                                                                        <td>
                                                                            <!-- Button Transparent -->
                                                                            <a ite" style="
                                                                                          color: #ffffff;
                                                                                          text-decoration: none;
                                                                                      ">
                                                                                <table width="110" border="0"
                                                                                    cellspacing="0" cellpadding="0">
                                                                                    <tr>
                                                                                        <td style="
                                                                                                      border-radius: 4px;
                                                                                                      border: 1px
                                                                                                          solid
                                                                                                          #ffffff;
                                                                                                  ">
                                                                                            <table width="100%"
                                                                                                border="0"
                                                                                                cellspacing="0"
                                                                                                cellpadding="0">
                                                                                                <tr>
                                                                                                    <td height="33">
                                                                                                        <table
                                                                                                            width="100%"
                                                                                                            border="0"
                                                                                                            cellspacing="0"
                                                                                                            cellpadding="0"
                                                                                                            class="spacer"
                                                                                                            style="
                                                                                                                      font-size: 0pt;
                                                                                                                      line-height: 0pt;
                                                                                                                      text-align: center;
                                                                                                                      width: 100%;
                                                                                                                      min-width: 100%;
                                                                                                                  ">
                                                                                                            <tr>
                                                                                                                <td height="5"
                                                                                                                    class="spacer"
                                                                                                                    style="
                                                                                                                              font-size: 0pt;
                                                                                                                              line-height: 0pt;
                                                                                                                              text-align: center;
                                                                                                                              width: 100%;
                                                                                                                              min-width: 100%;
                                                                                                                          ">
                                                                                                                    &nbsp;
                                                                                                                </td>
                                                                                                            </tr>
                                                                                                        </table>

                                                                                                        <div class="text-button1"
                                                                                                            style="
                                                                                                                      color: #ffffff;
                                                                                                                      font-family: Arial,
                                                                                                                          sans-serif,
                                                                                                                          'SSP';
                                                                                                                      font-size: 12px;
                                                                                                                      line-height: 16px;
                                                                                                                      text-align: center;
                                                                                                                      text-transform: uppercase;
                                                                                                                  ">
                                                                                                            <span
                                                                                                                class="link-white"
                                                                                                                style="
                                                                                                                          color: #ffffff;
                                                                                                                          text-decoration: none;
                                                                                                                      ">Acceso</span>
                                                                                                        </div>
                                                                                                        <table
                                                                                                            width="100%"
                                                                                                            border="0"
                                                                                                            cellspacing="0"
                                                                                                            cellpadding="0"
                                                                                                            class="spacer"
                                                                                                            style="
                                                                                                                      font-size: 0pt;
                                                                                                                      line-height: 0pt;
                                                                                                                      text-align: center;
                                                                                                                      width: 100%;
                                                                                                                      min-width: 100%;
                                                                                                                  ">
                                                                                                            <tr>
                                                                                                                <td height="5"
                                                                                                                    class="spacer"
                                                                                                                    style="
                                                                                                                              font-size: 0pt;
                                                                                                                              line-height: 0pt;
                                                                                                                              text-align: center;
                                                                                                                              width: 100%;
                                                                                                                              min-width: 100%;
                                                                                                                          ">
                                                                                                                    &nbsp;
                                                                                                                </td>
                                                                                                            </tr>
                                                                                                        </table>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </a>
                                                                            <!-- END Button Transparent -->
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    <!-- END Call To Action -->
                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0"
                                                        class="spacer" style="
                                                                  font-size: 0pt;
                                                                  line-height: 0pt;
                                                                  text-align: center;
                                                                  width: 100%;
                                                                  min-width: 100%;
                                                              ">
                                                        <tr>
                                                            <td height="30" class="spacer" style="
                                                                          font-size: 0pt;
                                                                          line-height: 0pt;
                                                                          text-align: center;
                                                                          width: 100%;
                                                                          min-width: 100%;
                                                                      ">
                                                                &nbsp;
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                                <td class="content-spacing" style="
                                                              font-size: 0pt;
                                                              line-height: 0pt;
                                                              text-align: left;
                                                          " width="30"></td>
                                            </tr>
                                        </table>
                                        <!-- END Section 2 -->

                                        <!-- Header Inner Red Line -->
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#999">
                                            <tr>
                                                <td valign="top">
                                                    <div style="
                                                                  font-size: 0pt;
                                                                  line-height: 0pt;
                                                                  height: 4px;
                                                                  background: #212121;
                                                              "></div>
                                                </td>
                                            </tr>
                                        </table>
                                        <!-- END Main -->

                                        <!-- Footer -->
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#fff">
                                            <tr>
                                                <td>
                                                    <!-- Footer Inner -->
                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                        <tr>
                                                            <td class="content-spacing" style="
                                                              font-size: 0pt;
                                                              line-height: 0pt;
                                                              text-align: left;
                                                          " width="30"></td>
                                                            <td>
                                                                <table width="100%" border="0" cellspacing="0"
                                                                    cellpadding="0" class="spacer" style="
                                                                  font-size: 0pt;
                                                                  line-height: 0pt;
                                                                  text-align: center;
                                                                  width: 100%;
                                                                  min-width: 100%;
                                                              ">
                                                                    <tr>
                                                                        <td height="30" class="spacer" style="
                                                                          font-size: 0pt;
                                                                          line-height: 0pt;
                                                                          text-align: center;
                                                                          width: 100%;
                                                                          min-width: 100%;
                                                                      ">
                                                                            &nbsp;
                                                                        </td>
                                                                    </tr>
                                                                </table>

                                                                <table width="100%" border="0" cellspacing="0"
                                                                    cellpadding="0">
                                                                    <tr>
                                                                        <!-- Column -->
                                                                        <th class="column" style="
                                                                          font-size: 0pt;
                                                                          line-height: 0pt;
                                                                          padding: 0;
                                                                          margin: 0;
                                                                          font-weight: normal;
                                                                          margin: 0;
                                                                      " width="276" valign="top">
                                                                            <table width="100%" border="0"
                                                                                cellspacing="0" cellpadding="0">
                                                                                <tr>
                                                                                    <td class="img" style="
                                                                                      font-size: 0pt;
                                                                                      line-height: 0pt;
                                                                                      text-align: left;
                                                                                  ">
                                                                                        <!-- Footer Logo -->
                                                                                        <div class="img-m-center" style="
                                                                                          font-size: 0pt;
                                                                                          line-height: 0pt;
                                                                                          text-align: left;
                                                                                      ">

                                                                                            <img src="http://localhost:5000/public/assets/img/products/HYpnoticgrowshop.png"
                                                                                                border="0" width="90"
                                                                                                height="90"
                                                                                                alt="Logo Planet Fraternity Footer" /></a>
                                                                                        </div>
                                                                                        <!-- END Footer Logo -->
                                                                                        <table width="100%" border="0"
                                                                                            cellspacing="0"
                                                                                            cellpadding="0"
                                                                                            class="spacer" style="
                                                                                          font-size: 0pt;
                                                                                          line-height: 0pt;
                                                                                          text-align: center;
                                                                                          width: 100%;
                                                                                          min-width: 100%;
                                                                                      ">
                                                                                            <tr>
                                                                                                <td height="20"
                                                                                                    class="spacer"
                                                                                                    style="
                                                                                                  font-size: 0pt;
                                                                                                  line-height: 0pt;
                                                                                                  text-align: center;
                                                                                                  width: 100%;
                                                                                                  min-width: 100%;
                                                                                              ">
                                                                                                    &nbsp;
                                                                                                </td>
                                                                                            </tr>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </th>

                                                                    </tr>
                                                                </table>
                                                                <table width="100%" border="0" cellspacing="0"
                                                                    cellpadding="0">
                                                                    <tr>
                                                                        <!-- Column -->
                                                                        <th class="column" style="
                                                                          font-size: 0pt;
                                                                          line-height: 0pt;
                                                                          padding: 0;
                                                                          margin: 0;
                                                                          font-weight: normal;
                                                                          margin: 0;
                                                                      " width="276" valign="top">
                                                                            <table width="100%" border="0"
                                                                                cellspacing="0" cellpadding="0">
                                                                                <tr>
                                                                                    <td>
                                                                                        <!-- Footer Copyright -->
                                                                                        <div class="text-footer" style="
                                                                                          color: #63635c;
                                                                                          font-family: Arial,
                                                                                              sans-serif,
                                                                                              'SSP';
                                                                                          font-size: 12px;
                                                                                          line-height: 16px;
                                                                                          text-align: left;
                                                                                      ">
                                                                                            Copyright
                                                                                            &copy;
                                                                                            2023
                                                                                            Hypnotic Grow Shop
                                                                                        </div>
                                                                                        <!-- END Footer Copyright -->
                                                                                        <table width="100%" border="0"
                                                                                            cellspacing="0"
                                                                                            cellpadding="0"
                                                                                            class="spacer" style="
                                                                                          font-size: 0pt;
                                                                                          line-height: 0pt;
                                                                                          text-align: center;
                                                                                          width: 100%;
                                                                                          min-width: 100%;
                                                                                      ">
                                                                                            <tr>
                                                                                                <td height="10"
                                                                                                    class="spacer"
                                                                                                    style="
                                                                                                  font-size: 0pt;
                                                                                                  line-height: 0pt;
                                                                                                  text-align: center;
                                                                                                  width: 100%;
                                                                                                  min-width: 100%;
                                                                                              ">
                                                                                                    &nbsp;
                                                                                                </td>
                                                                                            </tr>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </th>
                                                                        <!-- END Column -->
                                                                        <!-- Column -->
                                                                        <th class="column" style="
                                                                          font-size: 0pt;
                                                                          line-height: 0pt;
                                                                          padding: 0;
                                                                          margin: 0;
                                                                          font-weight: normal;
                                                                          margin: 0;
                                                                      " valign="top">
                                                                            <table width="100%" border="0"
                                                                                cellspacing="0" cellpadding="0">
                                                                                <tr>
                                                                                    <td>
                                                                                        <!-- Footer text On the Right -->
                                                                                        <div class="text-footer-r"
                                                                                            style="
                                                                                          color: #63635c;
                                                                                          font-family: Arial,
                                                                                              sans-serif,
                                                                                              'SSP';
                                                                                          font-size: 12px;
                                                                                          line-height: 16px;
                                                                                          text-align: right;
                                                                                      ">
                                                                                            Glew
                                                                                            Buenos Aires,
                                                                                            Argentina
                                                                                        </div>
                                                                                        <table width="100%" border="0"
                                                                                            cellspacing="0"
                                                                                            cellpadding="0"
                                                                                            class="spacer" style="
                                                                                          font-size: 0pt;
                                                                                          line-height: 0pt;
                                                                                          text-align: center;
                                                                                          width: 100%;
                                                                                          min-width: 100%;
                                                                                      ">
                                                                                            <tr>
                                                                                                <td height="6"
                                                                                                    class="spacer"
                                                                                                    style="
                                                                                                  font-size: 0pt;
                                                                                                  line-height: 0pt;
                                                                                                  text-align: center;
                                                                                                  width: 100%;
                                                                                                  min-width: 100%;
                                                                                              ">
                                                                                                    &nbsp;
                                                                                                </td>
                                                                                            </tr>
                                                                                        </table>

                                                                                        <div class="text-footer-r"
                                                                                            style="
                                                                                          color: #63635c;
                                                                                          font-family: Arial,
                                                                                              sans-serif,
                                                                                              'SSP';
                                                                                          font-size: 12px;
                                                                                          line-height: 16px;
                                                                                          text-align: right;
                                                                                      ">
                                                                                            <span style="
                                                                                            color: #ee7550;
                                                                                            text-decoration: underline;
                                                                                            " span
                                                                                                class="link-orange-u"
                                                                                                style="
                                                                                            color: #ee7550;
                                                                                            text-decoration: underline;
                                                                                            ">++++</span>

                                                                                            <a href="mailto:contacto@++++"
                                                                                                target="_blank"
                                                                                                class="link-orange-u"
                                                                                                style="
                                                                                              color: #00b853;
                                                                                              text-decoration: underline;
                                                                                          "><span class="link-orange-u"
                                                                                                    style="
                                                                                                  color: #00b853;
                                                                                                  text-decoration: underline;
                                                                                              ">contacto@++++.com</span></a>
                                                                                        </div>
                                                                                        <table width="100%" border="0"
                                                                                            cellspacing="0"
                                                                                            cellpadding="0"
                                                                                            class="spacer" style="
                                                                                          font-size: 0pt;
                                                                                          line-height: 0pt;
                                                                                          text-align: center;
                                                                                          width: 100%;
                                                                                          min-width: 100%;
                                                                                      ">
                                                                                            <tr>
                                                                                                <td height="6"
                                                                                                    class="spacer"
                                                                                                    style="
                                                                                                  font-size: 0pt;
                                                                                                  line-height: 0pt;
                                                                                                  text-align: center;
                                                                                                  width: 100%;
                                                                                                  min-width: 100%;
                                                                                              ">
                                                                                                    &nbsp;
                                                                                                </td>
                                                                                            </tr>
                                                                                        </table>

                                                                                        <div class="text-footer-r"
                                                                                            style="
                                                                                          color: #63635c;
                                                                                          font-family: Arial,
                                                                                              sans-serif,
                                                                                              'SSP';
                                                                                          font-size: 12px;
                                                                                          line-height: 16px;
                                                                                          text-align: right;
                                                                                      ">
                                                                                            Teléfono:
                                                                                            <a href="tel:+34911196333"
                                                                                                target="_blank"
                                                                                                class="link-grey" style="
                                                                                              color: #63635c;
                                                                                              text-decoration: none;
                                                                                          "><span class="link-grey"
                                                                                                    style="
                                                                                                  color: #63635c;
                                                                                                  text-decoration: none;
                                                                                              ">+34911196333</span></a>
                                                                                        </div>
                                                                                        <table width="100%" border="0"
                                                                                            cellspacing="0"
                                                                                            cellpadding="0"
                                                                                            class="spacer" style="
                                                                                          font-size: 0pt;
                                                                                          line-height: 0pt;
                                                                                          text-align: center;
                                                                                          width: 100%;
                                                                                          min-width: 100%;
                                                                                      ">
                                                                                            <tr>
                                                                                                <td height="10"
                                                                                                    class="spacer"
                                                                                                    style="
                                                                                                  font-size: 0pt;
                                                                                                  line-height: 0pt;
                                                                                                  text-align: center;
                                                                                                  width: 100%;
                                                                                                  min-width: 100%;
                                                                                              ">
                                                                                                    &nbsp;
                                                                                                </td>
                                                                                            </tr>
                                                                                        </table>

                                                                                        <!-- END Footer text On the Right -->
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </th>
                                                                        <!-- END Column -->
                                                                    </tr>
                                                                </table>
                                                                <table width="100%" border="0" cellspacing="0"
                                                                    cellpadding="0" class="spacer" style="
                                                                  font-size: 0pt;
                                                                  line-height: 0pt;
                                                                  text-align: center;
                                                                  width: 100%;
                                                                  min-width: 100%;
                                                              ">
                                                                    <tr>
                                                                        <td height="30" class="spacer" style="
                                                                          font-size: 0pt;
                                                                          line-height: 0pt;
                                                                          text-align: center;
                                                                          width: 100%;
                                                                          min-width: 100%;
                                                                      ">
                                                                            &nbsp;
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                            <td class="content-spacing" style="
                                                              font-size: 0pt;
                                                              line-height: 0pt;
                                                              text-align: left;
                                                          " width="30"></td>
                                                        </tr>
                                                    </table>
                                                    <!-- END Footer Inner -->
                                                </td>
                                            </tr>
                                        </table>
                                        <div class="hide-for-mobile">
                                            <table width="100%" border="0" cellspacing="0" cellpadding="0"
                                                class="spacer" style="
                                              font-size: 0pt;
                                              line-height: 0pt;
                                              text-align: center;
                                              width: 100%;
                                              min-width: 100%;
                                          ">
                                                <tr>
                                                    <td height="30" class="spacer" style="
                                                      font-size: 0pt;
                                                      line-height: 0pt;
                                                      text-align: center;
                                                      width: 100%;
                                                      min-width: 100%;
                                                  ">
                                                        &nbsp;
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                        <!-- END Footer -->
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
</body>

</html>
    
    
    `

}
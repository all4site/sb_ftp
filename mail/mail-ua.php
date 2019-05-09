<?php
include 'MailChimp.php';

use \DrewM\MailChimp\MailChimp;

$api_key = '7a798c253ff7609e6e21be8cddba841a-us11';
$list_id = 'd00c5017c8';

$MailChimp = new MailChimp($api_key);

if($_POST) {
		if(isset($_POST['check'])){

		}else{
			$_POST['check'] = "off";
		}
    $fname = $_POST['name'];
    $email = $_POST['email'];

    $result = $MailChimp->post("lists/$list_id/members", [
                    'email_address' => $email,
										'merge_fields' => ['FNAME'=>$fname],
										'status'        => 'subscribed',
								]);


    if ($MailChimp->success()) {
        echo 'suc';

    } else {
				echo $MailChimp->getLastError();
				$subscriber_hash = $MailChimp->subscriberHash($email);
				$result = $MailChimp->put("lists/$list_id/members/$subscriber_hash", [
							'merge_fields' => ['FNAME'=>$fname],
							'status'        => 'subscribed',
					]);
    }
}
?>
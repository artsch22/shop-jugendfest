alertId = '';
function getAlertId(Id){
    alertId = Id;
    document.getElementById('close').style.display = 'block';
};
function closeAlert(){
    if (alertId != ''){
    document.getElementById(alertId).remove();
    }
    document.getElementById('close').style.display = 'none';
}
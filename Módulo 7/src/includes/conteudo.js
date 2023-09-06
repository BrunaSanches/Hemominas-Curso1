function fc_iniciaSCO()
{
	loadPage();
    doLMSSetValue('cmi.core.lesson_status',"completed");
	doLMSCommit('');
}
function fc_setStatus(value)
{
	
	doLMSSetValue('cmi.core.lesson_status',value);
	unloadPage();
	
}



function nomeAluno(){
	doLMSGetValue('cmi.core.student_name');	
}

function Config()
{
	this.apiAddress='47.100.230.14';
	this.stLogin='/api/login/login_student/';
	this.stReg='/api/register/register_student/';
	this.getCourseByName='/api/search/search_course/';
	this.instLogin='/api/login/login_instructor/';
	this.instReg='/api/register/register_instructor/';
	this.instAddCourse='/api/add/add_course/';
	this.instAddVideo='/api/add/add_course_video/';
	this.instDelVideo='/api/delete/delete_course_list/';
	this.instDelCourse='/api/delete/delete_course/';
	this.getCourseByCate='/api/register/register_instructor/';
	this.getCourseByID='/api/search/get_course_videos_by_course_uuid/';
	//this.getCourseByCate='/api/register/register_instructor/';
	
}
//这里是通用方法
function getCookie(cname){
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i=0; i<ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(name)==0) { return c.substring(name.length,c.length); }
    }
    return null;
}
function saveTokenToCookie(tokenName,token,expire)
{
    let d = new Date(expire.replace(/-/g,'/'));
    document.cookie = tokenName + "="+ token + ";"+ "Expires=" + d.toUTCString();

}
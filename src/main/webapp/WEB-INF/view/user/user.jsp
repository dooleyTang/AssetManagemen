<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>信息资产管理</title>
<link rel="stylesheet" href="<%=basePath%>css/all.css">
<script src="<%=basePath%>js/all.js"></script>
<link rel="stylesheet"
	href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic">
</head>
<body>
	<div class="container" style="border-width: 2px">
		<div class="row" style="height: 50px">
			<div class="col-md-12">
				<span>管理中心</span>
			</div>
		</div>
		<div class="row">
			<div class="col-md-2">
				<aside class="main-sidebar">
					<section class="sidebar">
						<ul class="sidebar-menu" data-widget="tree">
							<li class="header">MAIN NAVIGATION</li>
							<li class="treeview"><a href="#"> <i
									class="fa fa-laptop"></i> <span>UI Elements</span> <span
									class="pull-right-container"> <i
										class="fa fa-angle-left pull-right"></i>
								</span>
							</a>
								<ul class="treeview-menu">
									<li><a href="pages/UI/general.html"><i
											class="fa fa-circle-o"></i> General</a></li>
									<li><a href="pages/UI/icons.html"><i
											class="fa fa-circle-o"></i> Icons</a></li>
									<li><a href="pages/UI/buttons.html"><i
											class="fa fa-circle-o"></i> Buttons</a></li>
									<li><a href="pages/UI/sliders.html"><i
											class="fa fa-circle-o"></i> Sliders</a></li>
									<li><a href="pages/UI/timeline.html"><i
											class="fa fa-circle-o"></i> Timeline</a></li>
									<li><a href="pages/UI/modals.html"><i
											class="fa fa-circle-o"></i> Modals</a></li>
								</ul></li>
							<li class="treeview"><a href="#"> <i class="fa fa-edit"></i>
									<span>Forms</span> <span class="pull-right-container"> <i
										class="fa fa-angle-left pull-right"></i>
								</span>
							</a>
								<ul class="treeview-menu">
									<li><a href="pages/forms/general.html"><i
											class="fa fa-circle-o"></i> General Elements</a></li>
									<li><a href="pages/forms/advanced.html"><i
											class="fa fa-circle-o"></i> Advanced Elements</a></li>
									<li><a href="pages/forms/editors.html"><i
											class="fa fa-circle-o"></i> Editors</a></li>
								</ul></li>
							<li class="treeview"><a href="#"> <i class="fa fa-table"></i>
									<span>Tables</span> <span class="pull-right-container">
										<i class="fa fa-angle-left pull-right"></i>
								</span>
							</a>
								<ul class="treeview-menu">
									<li><a href="pages/tables/simple.html"><i
											class="fa fa-circle-o"></i> Simple tables</a></li>
									<li><a href="pages/tables/data.html"><i
											class="fa fa-circle-o"></i> Data tables</a></li>
								</ul></li>
						</ul>
					</section>
					<!-- /.sidebar -->
				</aside>


			</div>
			<div class="col-md-8"><iframe src="temp" width="100%" height="100%"></iframe></div>
			<div class="col-md-2">http://amazeui.org/css/nav</div>
		</div>
	</div>

</body>
</html>
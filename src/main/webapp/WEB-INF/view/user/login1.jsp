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
	<div class="container-fluid">
	<div class="row-fluid">
		<div class="span12">
			<div class="row-fluid">
				<div class="span12">
					<h3 class="text-center">
						h3. 这是一套可视化布局系统.
					</h3> <button class="btn" type="button">按钮</button>
				</div>
			</div>
			<div class="row-fluid">
				<div class="span2">
					<div class="accordion" id="accordion-891566">
						<div class="accordion-group">
							<div class="accordion-heading">
								<a class="accordion-toggle collapsed" data-parent="#accordion-891566" data-toggle="collapse" href="#accordion-element-523639">选项卡 #1</a>
							</div>
							<div class="accordion-body collapse" id="accordion-element-523639">
								<div class="accordion-inner">
									功能1
								</div>
								<div class="accordion-inner">
									功能2
								</div>
								<div class="accordion-inner">
									功能3
								</div>
							</div>
						</div>
						<div class="accordion-group">
							<div class="accordion-heading">
								<a class="accordion-toggle" data-parent="#accordion-891566" data-toggle="collapse" href="#accordion-element-710872">选项卡 #2</a>
							</div>
							<div class="accordion-body collapse" id="accordion-element-710872">
								<div class="accordion-inner">
									功能块...
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="span6">
					<div class="tabbable" id="tabs-278228">
						<ul class="nav nav-tabs">
							<li class="active">
								<a href="#panel-109599" data-toggle="tab">第一部分</a>
							</li>
							<li>
								<a href="#panel-447450" data-toggle="tab">第二部分</a>
							</li>
						</ul>
						<div class="tab-content">
							<div class="tab-pane active" id="panel-109599">
								<p>
									第一部分内容.
								</p>
							</div>
							<div class="tab-pane" id="panel-447450">
								<p>
									第二部分内容.
								</p>
							</div>
						</div>
					</div>
					<table class="table table-hover table-condensed">
						<thead>
							<tr>
								<th>
									编号
								</th>
								<th>
									产品
								</th>
								<th>
									交付时间
								</th>
								<th>
									状态
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									1
								</td>
								<td>
									TB - Monthly
								</td>
								<td>
									01/04/2012
								</td>
								<td>
									Default
								</td>
							</tr>
							<tr class="success">
								<td>
									1
								</td>
								<td>
									TB - Monthly
								</td>
								<td>
									01/04/2012
								</td>
								<td>
									Approved
								</td>
							</tr>
							<tr class="error">
								<td>
									2
								</td>
								<td>
									TB - Monthly
								</td>
								<td>
									02/04/2012
								</td>
								<td>
									Declined
								</td>
							</tr>
							<tr class="warning">
								<td>
									3
								</td>
								<td>
									TB - Monthly
								</td>
								<td>
									03/04/2012
								</td>
								<td>
									Pending
								</td>
							</tr>
							<tr class="info">
								<td>
									4
								</td>
								<td>
									TB - Monthly
								</td>
								<td>
									04/04/2012
								</td>
								<td>
									Call in to confirm
								</td>
							</tr>
						</tbody>
					</table>
					<div class="pagination pagination-small pagination-centered">
						<ul>
							<li>
								<a href="#">上一页</a>
							</li>
							<li>
								<a href="#">1</a>
							</li>
							<li>
								<a href="#">2</a>
							</li>
							<li>
								<a href="#">3</a>
							</li>
							<li>
								<a href="#">4</a>
							</li>
							<li>
								<a href="#">5</a>
							</li>
							<li>
								<a href="#">下一页</a>
							</li>
						</ul>
					</div>
					 <a id="modal-784081" href="#modal-container-784081" role="button" class="btn" data-toggle="modal">触发遮罩窗体</a>
					
					<div id="modal-container-784081" class="modal hide fade" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
						<div class="modal-header">
							 <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
							<h3 id="myModalLabel">
								标题栏
							</h3>
						</div>
						<div class="modal-body">
							<p>
								显示信息
							</p>
						</div>
						<div class="modal-footer">
							 <button class="btn" data-dismiss="modal" aria-hidden="true">关闭</button> <button class="btn btn-primary">保存设置</button>
						</div>
					</div>
				</div>
				<div class="span4">
					<h2>
						标题
					</h2>
					<p>
						本可视化布局程序在HTML5浏览器上运行更加完美, 能实现自动本地化保存, 即使关闭了网页, 下一次打开仍然能恢复上一次的操作.
					</p>
					<p>
						<a class="btn" href="#">查看更多 »</a>
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
</body>
</html>
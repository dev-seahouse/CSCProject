<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="task2withdropdowntest1.aspx.cs" Inherits="Assignment1.Tests.testDropDown" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <asp:DropDownList ID="DropDownList1" runat="server" OnSelectedIndexChanged="DropDownList1_SelectedIndexChanged" AutoPostBack="true">
            <asp:ListItem Value="0">----Select a country ---</asp:ListItem>
            <asp:ListItem Value="America">America</asp:ListItem>
            <asp:ListItem>Canada</asp:ListItem>
            <asp:ListItem>Cambodia</asp:ListItem>
            <asp:ListItem>China</asp:ListItem>
            <asp:ListItem value="0">---Club Med---</asp:ListItem>
            <asp:ListItem value="0">---CRUISES---</asp:ListItem>
            <asp:ListItem value="0">---Exotic Destinations---</asp:ListItem>
            <asp:ListItem>Europe</asp:ListItem>
            <asp:ListItem>Hong Kong</asp:ListItem>
            <asp:ListItem>India</asp:ListItem>
            <asp:ListItem>Indonesia</asp:ListItem>
            <asp:ListItem>Japan</asp:ListItem>
            <asp:ListItem>Korea</asp:ListItem>
            <asp:ListItem>Macau</asp:ListItem>
            <asp:ListItem>Malaysia</asp:ListItem>
            <asp:ListItem>Maldives</asp:ListItem>
            <asp:ListItem>Mauritius</asp:ListItem>
            <asp:ListItem>Myanmar</asp:ListItem>
            <asp:ListItem>New Zealand</asp:ListItem>
            <asp:ListItem>Philippines</asp:ListItem>
            <asp:ListItem>Taiwan</asp:ListItem>
            <asp:ListItem>Thailand</asp:ListItem>
            <asp:ListItem>Vietnam</asp:ListItem>
        </asp:DropDownList>
        <asp:Label runat="server" ID="Label1"></asp:Label>
    </form>
    
</body>
</html>

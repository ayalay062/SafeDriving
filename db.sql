USE [master]
GO
/****** Object:  Database [SafeDriving]    Script Date: 11/05/2022 14:34:54 ******/
CREATE DATABASE [SafeDriving]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'SafeDriving', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\SafeDriving.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'SafeDriving_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\SafeDriving_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [SafeDriving].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [SafeDriving] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [SafeDriving] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [SafeDriving] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [SafeDriving] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [SafeDriving] SET ARITHABORT OFF 
GO
ALTER DATABASE [SafeDriving] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [SafeDriving] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [SafeDriving] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [SafeDriving] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [SafeDriving] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [SafeDriving] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [SafeDriving] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [SafeDriving] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [SafeDriving] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [SafeDriving] SET  DISABLE_BROKER 
GO
ALTER DATABASE [SafeDriving] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [SafeDriving] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [SafeDriving] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [SafeDriving] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [SafeDriving] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [SafeDriving] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [SafeDriving] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [SafeDriving] SET RECOVERY FULL 
GO
ALTER DATABASE [SafeDriving] SET  MULTI_USER 
GO
ALTER DATABASE [SafeDriving] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [SafeDriving] SET DB_CHAINING OFF 
GO
ALTER DATABASE [SafeDriving] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [SafeDriving] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [SafeDriving] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'SafeDriving', N'ON'
GO
ALTER DATABASE [SafeDriving] SET QUERY_STORE = OFF
GO
USE [SafeDriving]
GO
/****** Object:  Table [dbo].[offers]    Script Date: 11/05/2022 14:34:55 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[offers](
	[id] [int] IDENTITY(100,1) NOT NULL,
	[tz] [int] NULL,
	[resourse] [varchar](30) NOT NULL,
	[destination] [varchar](30) NOT NULL,
	[seats] [int] NULL,
	[date_time] [datetime] NULL,
	[price] [float] NULL,
	[active] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[persons]    Script Date: 11/05/2022 14:34:55 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[persons](
	[id] [int] IDENTITY(100,1) NOT NULL,
	[username] [varchar](20) NULL,
	[tz] [int] NULL,
	[adress] [varchar](20) NULL,
	[mail] [varchar](20) NULL,
	[phone] [varchar](12) NULL,
	[inqure] [varchar](30) NULL,
	[ok] [int] NULL,
	[password] [varchar](12) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[requests]    Script Date: 11/05/2022 14:34:55 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[requests](
	[id] [int] IDENTITY(100,1) NOT NULL,
	[tz] [int] NULL,
	[resourse] [varchar](30) NOT NULL,
	[destination] [varchar](30) NOT NULL,
	[seats] [int] NULL,
	[date_time] [datetime] NULL,
	[active] [int] NULL,
	[ignore_offers] [varchar](300) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[travels]    Script Date: 11/05/2022 14:34:55 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[travels](
	[id] [int] IDENTITY(100,1) NOT NULL,
	[id_offer] [int] NULL,
	[id_request] [int] NULL,
	[resourse] [varchar](30) NOT NULL,
	[destination] [varchar](30) NOT NULL,
	[seats] [int] NULL,
	[date_time] [datetime] NULL,
	[price] [float] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[offers] ON 

INSERT [dbo].[offers] ([id], [tz], [resourse], [destination], [seats], [date_time], [price], [active]) VALUES (100, 1122334, N'בני ברק', N'ירושלים', 1, CAST(N'2022-03-15T00:00:00.000' AS DateTime), 100, 1)
SET IDENTITY_INSERT [dbo].[offers] OFF
SET IDENTITY_INSERT [dbo].[persons] ON 

INSERT [dbo].[persons] ([id], [username], [tz], [adress], [mail], [phone], [inqure], [ok], [password]) VALUES (100, N'hadasa', 112233, N'Israel', N'hadasay133@gmail.com', N'7776767', N'', 1, N'1234')
INSERT [dbo].[persons] ([id], [username], [tz], [adress], [mail], [phone], [inqure], [ok], [password]) VALUES (101, N'hadasa2', 1122334, N'Israel', N'hadasay133@gmail.com', N'7776767', N'', 1, N'12345')
SET IDENTITY_INSERT [dbo].[persons] OFF
SET IDENTITY_INSERT [dbo].[requests] ON 

INSERT [dbo].[requests] ([id], [tz], [resourse], [destination], [seats], [date_time], [active], [ignore_offers]) VALUES (100, 112233, N'בני ברק', N'ירושלים', 1, CAST(N'2022-03-15T00:00:00.000' AS DateTime), 1, NULL)
SET IDENTITY_INSERT [dbo].[requests] OFF
/****** Object:  Index [UQ__offers__3213E07863140AA8]    Script Date: 11/05/2022 14:34:55 ******/
ALTER TABLE [dbo].[offers] ADD UNIQUE NONCLUSTERED 
(
	[tz] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [UQ__persons__3213E07869D5A54C]    Script Date: 11/05/2022 14:34:55 ******/
ALTER TABLE [dbo].[persons] ADD UNIQUE NONCLUSTERED 
(
	[tz] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [UQ__requests__3213E0789BB0063F]    Script Date: 11/05/2022 14:34:55 ******/
ALTER TABLE [dbo].[requests] ADD UNIQUE NONCLUSTERED 
(
	[tz] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[persons]  WITH CHECK ADD CHECK  (([ok]=(1) OR [ok]=(0)))
GO
USE [master]
GO
ALTER DATABASE [SafeDriving] SET  READ_WRITE 
GO

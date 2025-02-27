import { IconType } from 'react-icons';

import {
	HiChevronUp,
	HiChevronDown,
	HiChevronRight,
	HiChevronLeft,
	HiArrowUpRight,
	HiOutlineArrowPath,
	HiCheck,
	HiMiniQuestionMarkCircle,
	HiOutlineLink,
	HiMiniXMark,
	HiExclamationTriangle,
	HiInformationCircle,
	HiExclamationCircle,
	HiCheckCircle,
	HiMiniGlobeAsiaAustralia,
	HiEnvelope,
	HiCalendarDays
} from "react-icons/hi2";

import {
	PiHouseDuotone,
	PiUserCircleDuotone,
	PiGridFourDuotone,
	PiBookBookmarkDuotone,
	PiImageDuotone,
	PiRobotDuotone,
	PiChartBarDuotone,
	PiSparkleLight,
	PiFileTextDuotone,
	PiPaintBrushDuotone,
	PiMicrophoneStageDuotone,
	PiHeadphonesDuotone,
	PiShareNetworkDuotone,
	PiArrowRightDuotone,
	PiStarDuotone,
	PiBrainDuotone,
	PiCodeDuotone,
	PiDatabaseDuotone,
	PiRocketLaunchDuotone
} from "react-icons/pi";

import {
	FaDiscord,
	FaGithub,
	FaLinkedin,
	FaXTwitter
} from "react-icons/fa6";

export const iconLibrary: Record<string, IconType> = {
	chevronUp: HiChevronUp,
    chevronDown: HiChevronDown,
	chevronRight: HiChevronRight,
	chevronLeft: HiChevronLeft,
	refresh: HiOutlineArrowPath,
	arrowUpRight: HiArrowUpRight,
	check: HiCheck,
	helpCircle: HiMiniQuestionMarkCircle,
	infoCircle: HiInformationCircle,
	warningTriangle: HiExclamationTriangle,
	errorCircle: HiExclamationCircle,
	checkCircle: HiCheckCircle,
	email: HiEnvelope,
	globe: HiMiniGlobeAsiaAustralia,
	person: PiUserCircleDuotone,
	grid: PiGridFourDuotone,
	book: PiBookBookmarkDuotone,
	close: HiMiniXMark,
	openLink: HiOutlineLink,
	calendar: HiCalendarDays,
	home: PiHouseDuotone,
	store: PiImageDuotone,
	discord: FaDiscord,
	github: FaGithub,
	linkedin: FaLinkedin,
	x: FaXTwitter,
	
	// New icons for showcase
	share: PiShareNetworkDuotone,
	messageSquare: PiRobotDuotone,
	trendingUp: PiChartBarDuotone,
	sparkles: PiSparkleLight,
	image: PiImageDuotone,
	mic: PiMicrophoneStageDuotone,
	bot: PiRobotDuotone,
	barChart: PiChartBarDuotone,
	fileText: PiFileTextDuotone,
	palette: PiPaintBrushDuotone,
	headphones: PiHeadphonesDuotone,
	arrowRight: PiArrowRightDuotone,
	star: PiStarDuotone,
	brain: PiBrainDuotone,
	code: PiCodeDuotone,
	database: PiDatabaseDuotone,
	rocket: PiRocketLaunchDuotone
};
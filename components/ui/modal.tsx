import { cn } from "@/lib/utils";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	className?: string;
	children?: React.ReactNode;
	horizontal?: "start" | "center" | "end";
	vertical?: "start" | "center" | "end";
}

const Modal: React.FC<ModalProps> = ({
	isOpen,
	onClose,
	children,
	horizontal = "center",
	vertical = "center",
}) => {
	const onClick = () => {
		onClose();
	};

	return (
		<div
			className={cn(
				"fixed inset-0 flex z-50 h-full w-full",
				isOpen ? "" : "hidden",
				`items-${horizontal}`,
				`justify-${vertical}`
			)}
		>
			<div
				className="modal-overlay fixed inset-0 bg-black opacity-50"
				onClick={onClick}
			></div>
			{children}
		</div>
	);
};

export default Modal;

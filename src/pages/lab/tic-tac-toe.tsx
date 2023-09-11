import { useState } from 'react';
import SEO from '@/components/seo';
import FullSection from '@/layouts/full-section'
import styles from './tic-tac-toe.module.scss';

function calculateWinner(squares: any) {
	const lines = [
		[0, 1, 2], [3, 4, 5], [6, 7, 8],
		[0, 3, 6], [1, 4, 7], [2, 5, 8],
		[0, 4, 8], [2, 4, 6]
	];
	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			return squares[a];
		}
	}
	return null;
}

function calculateDraw(currentMove: number) {
	if (currentMove === 9) {
		return true;
	}
	return false;
}

function Square({ value, onSquareClick }:
	{ value: any, onSquareClick: any }) {
	return (
		<button className={styles.square} onClick={onSquareClick}>
			{value}
		</button>
	);
}

function Board({ xIsNext, squares, onPlay }:
	{ xIsNext: any, squares: any, onPlay: any }) {
	function handleClick(i: number) {
		if (calculateWinner(squares) || squares[i]) {
			return;
		}
		const nextSquares = squares.slice();
		if (xIsNext) {
			nextSquares[i] = 'X';
		} else {
			nextSquares[i] = 'O';
		}
		onPlay(nextSquares);
	}

	let threeSquare = [], threeRow = [];
	for (let i = 0; i < 3; i++) {
		threeSquare = [];
		for (let j = 0; j < 3; j++) {
			threeSquare.push(
				<Square value={squares[i * 3 + j]}
					onSquareClick={() => handleClick(i * 3 + j)}
					key={j} />
			);
		}
		threeRow.push(
			<div className={styles['board-row']} key={i}>
				{threeSquare}
			</div>
		);
	}
	return <div className={styles.board}>{threeRow}</div>;
}

function Status({ xIsNext, squares, currentMove }:
	{ xIsNext: boolean, squares: any, currentMove: number }) {
	const winner = calculateWinner(squares);
	let status;
	if (winner) {
		status = '獲勝者: ' + winner;
	} else if (calculateDraw(currentMove)) {
		status = '平手';
	} else {
		status = '下一位: ' + (xIsNext ? 'X' : 'O');
	}

	return <h2 className={styles.subtitle}>{status}</h2>;
}

function History({ history, currentMove, setCurrentMove }:
	{ history: any[][], currentMove: number, setCurrentMove: any }) {
	function jumpTo(nextMove: number) {
		setCurrentMove(nextMove);
	}

	const moves = history.map((squares, move) => {
		let description;
		if (move === currentMove) {
			description =
				<span className={styles.current}>
					你在第 {move} 回合
				</span>;
		} else if (move === 0) {
			description =
				<button className={styles.move} onClick={() => jumpTo(move)}>
					前往遊戲的起點
				</button>;
		} else {
			description =
				<button className={styles.move} onClick={() => jumpTo(move)}>
					前往第 {move} 回合
				</button>;
		}
		return (
			<li className={styles.li} key={move}>{description}</li>
		);
	});

	return <ol>{moves}</ol>;
}

export default function Game() {
	const [history, setHistory] = useState([Array(9).fill(null)]);
	const [currentMove, setCurrentMove] = useState(0);
	const xIsNext = currentMove % 2 === 0;
	const currentSquares = history[currentMove];

	function handlePlay(nextSquares: any) {
		const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
		setHistory(nextHistory);
		setCurrentMove(nextHistory.length - 1);
	}

	return (
		<>
			<SEO title="井字遊戲"
				description="可以穿梭時空的井字遊戲"
				url="/lab/tic-tac-toe"
				image="/images/tic-tac-toe.png" />
				
			<main>
				<FullSection>
					<div className={styles.app}>
						<h1 className={styles.title}>井字遊戲</h1>
						<div className={styles.game}>
							<div className={styles['width-50']}>
								<Board xIsNext={xIsNext}
									squares={currentSquares}
									onPlay={handlePlay} />
								<Status xIsNext={xIsNext}
									squares={currentSquares}
									currentMove={currentMove} />
							</div>
							<div className={styles['width-50']}>
								<History history={history} currentMove={currentMove} setCurrentMove={setCurrentMove} />
							</div>
						</div>
					</div>
				</FullSection>
			</main>
		</>
	);
}
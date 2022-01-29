import { FormEvent, useState } from 'react';
import Modal from 'react-modal';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { Container, TransactionTypeContainer, RadioBox } from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposity');

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <Modal
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <Container onSubmit={handleCreateNewTransaction}>
        <button
          type='button'
          onClick={onRequestClose}
          className='react-modal-close'
        >
          <img src={closeImg} alt='Fechar Modal' />
        </button>
        <h2>Cadastrar transação</h2>

        <input
          placeholder='titulo'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder='valor'
          type='number'
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type='button'
            onClick={() => setType('deposity')}
            isActive={type === 'deposity'}
            activeColor='green'
          >
            <img src={incomeImg} alt='Entrada' />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type='button'
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor='red'
          >
            <img src={outcomeImg} alt='Saída' />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder='categoria'
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button type='submit'>Cadastrar</button>
      </Container>
    </Modal>
  );
}

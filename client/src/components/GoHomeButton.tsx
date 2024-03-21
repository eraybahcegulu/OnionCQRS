import { Button } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';

const GoHomeButton = () => {
    const navigate = useNavigate();
    return (
        <Button color="secondary" variant="shadow" onClick={() => navigate('/home')} > Home </Button>
    )
}

export default GoHomeButton
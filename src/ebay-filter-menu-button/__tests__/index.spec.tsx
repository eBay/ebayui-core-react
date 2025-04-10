/// <reference types="@testing-library/jest-dom" />
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { EbayFilterMenuButton, EbayFilterMenuItem } from '../index';

describe('EbayFilterMenuButton', () => {
  it('should call onExpand when the menu is expanded', async () => {
    const onExpand = jest.fn();
    render(
        <EbayFilterMenuButton onExpand={onExpand} text="Menu">
            <EbayFilterMenuItem>Option 1</EbayFilterMenuItem>
            <EbayFilterMenuItem>Option 2</EbayFilterMenuItem>
        </EbayFilterMenuButton>
    );
    const button = screen.getByText('Menu');

    await userEvent.click(button);

    expect(onExpand).toHaveBeenCalled();
  });

  it('should call onCollapse when the menu is collapsed', async () => {
    const onCollapse = jest.fn();
    render(
        <EbayFilterMenuButton onCollapse={onCollapse} text="Menu">
            <EbayFilterMenuItem>Option 1</EbayFilterMenuItem>
            <EbayFilterMenuItem>Option 2</EbayFilterMenuItem>
        </EbayFilterMenuButton>
    );
    const button = screen.getByText('Menu');

    await userEvent.click(button); // Expand
    await userEvent.click(button); // Collapse

    expect(onCollapse).toHaveBeenCalled();
  });

  it('should call onCollapse when Escape key is pressed', async () => {
    const onCollapse = jest.fn();
    render(
        <EbayFilterMenuButton onCollapse={onCollapse} text="Menu">
            <EbayFilterMenuItem>Option 1</EbayFilterMenuItem>
            <EbayFilterMenuItem>Option 2</EbayFilterMenuItem>
        </EbayFilterMenuButton>
    );
    const button = screen.getByText('Menu');

    await userEvent.click(button); // Expand
    await userEvent.keyboard('{escape}'); // Press Escape

    expect(onCollapse).toHaveBeenCalled();
  });

  it('should set aria-pressed to true when at least one option is checked', async () => {
    render(
      <EbayFilterMenuButton text="Menu">
        <EbayFilterMenuItem checked>Option 1</EbayFilterMenuItem>
      </EbayFilterMenuButton>
    );
    const button = screen.getByText('Menu').closest('button');
    expect(button).toHaveAttribute('aria-pressed', 'true');
  });

  it('should set aria-pressed after selection', async () => {
    render(
      <EbayFilterMenuButton text="Menu">
        <EbayFilterMenuItem>Option 1</EbayFilterMenuItem>
        <EbayFilterMenuItem>Option 2</EbayFilterMenuItem>
      </EbayFilterMenuButton>
    );

    const button = screen.getByText('Menu').closest('button') as HTMLButtonElement;

    await userEvent.click(button)
    await userEvent.click(screen.getByText('Option 1'));
    expect(button).toHaveAttribute('aria-pressed', 'true');
  });

  it('should set aria-pressed to false when no options are checked', async () => {
    render(
      <EbayFilterMenuButton text="Menu">
        <EbayFilterMenuItem>Option 1</EbayFilterMenuItem>
      </EbayFilterMenuButton>
    );
    const button = screen.getByText('Menu').closest('button') as HTMLButtonElement;
    expect(button).toHaveAttribute('aria-pressed', 'false');

    await userEvent.click(button);
    await userEvent.click(screen.getByText('Option 1'));
    expect(button).toHaveAttribute('aria-pressed', 'true');

    await userEvent.click(screen.getByText('Option 1'));

    expect(button).toHaveAttribute('aria-pressed', 'false');
  });
});

#!/bin/bash

# Useful gh CLI commands for managing CI/CD

echo "=========================================="
echo "GitHub CLI Commands for CI/CD Management"
echo "=========================================="
echo ""

show_menu() {
    echo "Select an option:"
    echo "1. View workflow runs"
    echo "2. Watch latest workflow run"
    echo "3. View repository secrets"
    echo "4. Set RENDER_DEPLOY_HOOK_URL secret"
    echo "5. Trigger manual deployment"
    echo "6. View deployment logs"
    echo "7. Check Actions status"
    echo "8. Exit"
    echo ""
}

while true; do
    show_menu
    read -p "Enter choice [1-8]: " choice

    case $choice in
        1)
            echo ""
            echo "Recent workflow runs:"
            gh run list --limit 10
            echo ""
            ;;
        2)
            echo ""
            echo "Watching latest workflow run..."
            gh run watch
            echo ""
            ;;
        3)
            echo ""
            echo "Repository secrets:"
            gh secret list
            echo ""
            ;;
        4)
            echo ""
            read -p "Enter Render Deploy Hook URL: " hook_url
            if [ -n "$hook_url" ]; then
                echo "$hook_url" | gh secret set RENDER_DEPLOY_HOOK_URL
                echo "✅ Secret set successfully!"
            fi
            echo ""
            ;;
        5)
            echo ""
            echo "Triggering manual deployment..."
            gh workflow run deploy.yml
            echo "✅ Workflow triggered! Use option 2 to watch progress."
            echo ""
            ;;
        6)
            echo ""
            read -p "Enter run ID (or press Enter for latest): " run_id
            if [ -z "$run_id" ]; then
                gh run view --log
            else
                gh run view $run_id --log
            fi
            echo ""
            ;;
        7)
            echo ""
            echo "GitHub Actions status:"
            gh api repos/rONin01010101010/RLEC/actions/permissions
            echo ""
            ;;
        8)
            echo "Goodbye!"
            exit 0
            ;;
        *)
            echo "Invalid option. Please try again."
            echo ""
            ;;
    esac
done
